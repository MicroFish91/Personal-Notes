const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mongo-exercises')

const Course = mongoose.model('Course', {});

async function getCourses(){
    return await Course
    .find({ isPublished: true })
    .or([{price: { $gte: 15 }}, { name: /.*by.*/}])
    .sort('-price');
}

async function run(){
    const course = await getCourses();
    console.log(course);
}

run();