var Event = require('../models/event');

module.exports = {
    create,
    index,
    // delete,
};

// async function create(req, res) {
//     try {
//         await Event.create(req.body);
//     } catch (err) {
//         res.json({err});
//     }
// }


// function show(req, res) {
//   req.body.userId = req.user.id;
//   event.findById(req.params.id, function(err, event) {
//     console.log(items);
//     res.render("items/show", {
//       items,
//       user: req.user,
//       name: req.query.name
//     });
//   });
// }

// function index() {
//   return fetch('/api/events/').then(res => res.json());
// }

async function index(req, res) {
  const event = await Event.find({});

  res.json(event);
}


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