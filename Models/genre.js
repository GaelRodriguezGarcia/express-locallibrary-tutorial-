var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        Genre_Type: {type: String, required: true, enum: ['Fiction', 'Non-fiction', 'Romance', 'Sci-Fi'], default: 'Unknown' },
    }
);

// Virtual for bookinstance's URL
GenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this._id;
    });

//Export model
module.exports = mongoose.model('Genre', GenreSchema);