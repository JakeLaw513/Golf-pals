const mongoose = require('mongoose');

const GolfersSchema = ({
    name: {
        type: String,
            required:  [true, 'name is required'],
            minLength: [3, 'Name must be at least 3 characters long'],
    },
    type: {
        type: String,
        required:  [true, 'type is required'],
        minLength: [1, 'Type must be at least 1 characters long'],
    },
    description: {
        type: String,
        required:  [true, 'description is required'],
        minLength: [3, 'description must be at least 3 characters long'],
    },
    skill1: {
        type: String,
        required: [false, 'skills is not required'],
    },
    skill2: {
        type: String,
        required: [false, 'skills is not required'],
    },
    skill3: {
        type: String,
        required: [false, 'skills is not required'],
    },
});

module.exports = mongoose.model("Golfers", GolfersSchema)