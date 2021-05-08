const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongo-exercises', {useNewUrlParser: true}, { useUnifiedTopology: true })
.then(() => console.log("Connecting to mongodb"))

// Will not be able to update sections if courseSchema does not display that property

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now }, // or just 'date: Date'
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

// Two ways to update your data in mongodb

// Approach 1: Query first
// Modify its properties
// Save
async function updateCourse(id){

    const course = await Course.findById(id);
    if (!course) return;


    course.isPublished = true;
    course.author = 'Another Authorr';
    course.price = 13;

    const result = await course.save();
    console.log(result);
}

// Approach 2: Update Directly
// Update directly
// Optionally get the updated document
// course.set({
//     isPublished: true,
//     author: 'Another Author'
// });

async function updateCourse(id){

    // of interest: look up MongoDB 'update operators'
    // findbyidandupdate to get a copy of the updated doc back; if just want to update without seeing, just use .update()
    const course = await Course.findByIdAndUpdate({_id: id }, {
        $set: {
            author: 'Jason',
            isPublished: false
        }
    }, {new: true});

    // const result = await Course.update({_id: id }, {
    //     $set: {
    //         author: 'Jack',
    //         isPublished: true
    //     }
    // });

    console.log(course);
}

updateCourse('5a68fe2142ae6a6482c4c9cb');