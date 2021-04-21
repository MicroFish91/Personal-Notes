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
    // instead of tags: [ String ] which could be inputted as '[]'
    tags: {
        type: Array,
        // Accept if true, else display message

        // Validators without async
        // validate: {
        //     validator: function(v) {
        //         return v && v.length > 0;
        //     },
        //     message: 'A course should have at least one tag.'
        // }

        // Async version of the validator
        validate: {
            isAsync: true,
            validator: function(v, callback) {
                setTimeout(() => {
                    // Do some async work
                    const result = v && v.length > 0;
                    callback(result);
                }, 4000);
                
            },
            message: 'A course should have at least one tag.'
        }
    },
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
        name: 'Angular Course',
        category: "-",
        author: "Mosh",
        tags: null,
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
        for (field in error.errors){
            console.log(error.errors[field].message);
        }
    }

}

createCourse('5a68fe2142ae6a6482c4c9cb');
