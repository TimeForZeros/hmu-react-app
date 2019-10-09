const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    date: Date,
    location: String,
    details: String,
    contributors: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
    timestamp: true,
});

module.exports = mongoose.model('Event', eventSchema);