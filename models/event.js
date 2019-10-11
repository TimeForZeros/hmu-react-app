const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: String,
    date: Date,
    location: String,
    details: String,
    creator: String,
    // creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    contributors: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
    timestamp: true,
});

module.exports = mongoose.model('Event', eventSchema);