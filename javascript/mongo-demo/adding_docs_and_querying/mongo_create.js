const mongoose = require('mongoose');

// connect to local host db (don't need playground), change if deploying from a config file
mongoose.connect('mongodb://localhost:27017/playground', {useNewUrlParser: true}, { useUnifiedTopology: true })
    .then(() => console.log('Connected  to MongoDB...'))
    .catch(() => console.error('Could not connect to MongoDB...', err));


// Schema Types: String, Number, Date, Buffer (binary data), Boolean, ObjectID, Array
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now }, // or just 'date: Date'
    isPublished: Boolean
});


// Only need to wrap in async function if you want to do something with "result", in this case console.log'ing the value
// Otherwise just run contents of the function without the need for wrapping
async function createCourse() {
    // => Classes, Objects
    // => Course, nodeCourse
    // Schema gets compiled into a Model (class)
    // Mongodb doesn't use relational databases
    const Course = mongoose.model('Course', courseSchema);
    const course = new Course({
        name: 'Node.js Course',
        author: 'Matt',
        tags: ['node', 'backend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);

}

createCourse();


async function getCourses() {

    // eq (equal)
    // ne (not equal)
    // gt (greater than)
    // gte (greater than or equal to)
    // lt (less than)
    // lte (less than or equal to)
    // in
    // nin (not in)

    const courses = await Course
    // .find({ author: 'Matt', isPublished: true }) 
    // .find({ price: { $gte: 10, $lte: 20 } }) // x >= 10, x <= 20
    .find({ author: /^Matt/})  // Starts with 'Matt' (RegExp)
    .find({ author: /Fisher$/i })  // Ends with 'Fisher' (RegExp) - (i) at the end to make it case insensitive
    .find({ author: /.*Matt.*/})  // Look for anything that contains within the '.*'s
    .or([{ author: 'Matt' }, { isPublished: true }])
    .and([])
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
    
    console.log(courses);

}

getCourses();