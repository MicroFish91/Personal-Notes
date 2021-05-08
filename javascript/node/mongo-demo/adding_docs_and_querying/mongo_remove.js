const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongo-exercises', {useNewUrlParser: true}, { useUnifiedTopology: true })
.then(() => console.log("Connecting to mongodb"))

const Course = mongoose.model('Course', {});

// .deleteOne finds first object and deletes it
// .deleteMany finds all objects that match and deletes them
async function removeCourse(id){
    const result = await Course.deleteOne({ _id: id });
    console.log(result);
}

removeCourse('5a68fe2142ae6a6482c4c9cb');