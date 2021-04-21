// For strings:
category: {
    type: String,
    required: true,
    enum: ['web', 'mobile', 'network'],  // input must equal one of the following
    lowercase: true,  // converts to all lowercase
    uppercase: true,  // converts to all uppercase
    trim: true      // trims whitespace
}

// For numbers:
price: {
    type: Number,
    required: function() { return this.isPublished; },
    min: 10,
    max: 200,
    get: v => Math.round(v),
    set: v => Math.round(v)
}

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now }, // or just 'date: Date'
    isPublished: Boolean
});