const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongo-exercises', {useNewUrlParser: true}, { useUnifiedTopology: true })
.then(() => console.log("Connecting to mongodb"))

// Will not be able to update sections if courseSchema does not display that property
// 'REQUIRED' TO TRIGGER VALIDATION
// The validation is only required on the "mongoose" level, the mongo database side does not require
// this validation
const courseSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255,
        // match: /pattern/

    },
    category: {
        type: String,
        enum: ['web', 'mobile', 'network'] // example that sets an array of valid string inputs
    },
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now }, // or just 'date: Date'
    isPublished: Boolean,
    price: {
        type: Number,
        required: function() { return this.isPublished; },
        min: 10,
        max: 200
    }
});

const Course = mongoose.model('Course', courseSchema);

// Try catch block to check for errors
async function createCourse(id){

    const course = new Course({
        name:
        author: "Mosh",
        tags: ['angular', 'frontend'],
        isPublished: true,
        price: 15
    });

    try {
        // course.validate() Doesn't naturally return a boolean
        // await course.validate();
        const result = await course.save();
        console.log(result);

    }
    catch (error) {
        console.log(error.message);
    }

}

createCourse('5a68fe2142ae6a6482c4c9cb');
