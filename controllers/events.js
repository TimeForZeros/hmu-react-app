var Event = require('../models/event');

module.exports = {
    create,
    // delete,
};

async function create(req, res) {
    try {
        await Event.create(req.body);
    } catch (err) {
        res.json({err});
    }
}



