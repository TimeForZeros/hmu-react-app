var Event = require('../models/event');

module.exports = {
    create,
    // delete,
};

// async function create(req, res) {
//     try {
//         await Event.create(req.body);
//     } catch (err) {
//         res.json({err});
//     }
// }


function create(req, res) {
    const event = new Event(req.body);
    try {
      event.save();
    } catch (err) {
      // Probably a duplicate email
      res.status(400).json(err);
    }
  }
// async function create(req, res) {
//     const event = new Event(req.body);
//     try {
//       await event.save();
//     } catch (err) {
//       // Probably a duplicate email
//       res.status(400).json(err);
//     }
//   }