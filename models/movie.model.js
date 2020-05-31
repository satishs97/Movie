const mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    image: {
        type: String
    },
    year: {
        type: String
    },
    summary: {
        type: String
    }
});



mongoose.model('Movie', movieSchema);
