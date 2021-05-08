const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mongo-exercises')

const Course = mongoose.model('Course', {});

async function getCourses() {
    return await Course
    .find({isPublished: true})
    .or([ { tags: 'frontend' }, { tags: 'backend' } ])
    .sort('-price')
    .select('name author price')
}

async function run(){
    const filteredCourse = await getCourses();
    console.log(filteredCourse);
}

run();