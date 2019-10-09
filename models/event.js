const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    date: Date,
    location: String,
    details: String,
});

module.exports = mongoose.model('Event', eventSchema);