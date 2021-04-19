const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mongo-exercises')

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now }, // or just 'date: Date'
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    return await Course
    .find({ isPublished: true })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 })
}

async function run(){
    const courses = await getCourses();
    console.log(courses);
}

run();




