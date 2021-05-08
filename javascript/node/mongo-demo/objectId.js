// _id: 5a724953ab83547957541e6a
// 12 bytes
    // 4 bytes - timestamp
    // 3 bytes - machine identifier
    // 3 bytes - process indentifier
    // 3 bytes - overflow counter


const mongoose = require('mongoose');

const id = new mongoose.Types.ObjectId();
console.log(id.getTimestamp());

const isValid = mongoose.Types.ObjectId.isValid('1234');
console.log(isValid);