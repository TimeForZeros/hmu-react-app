var Event = require('../models/event');

module.exports = {
    create,
    index,
    detail,
    update,
    delete: deleteOne,
};

async function index(req, res) {
  const event = await Event.find({});
  res.status(200).json(event);
}

async function detail(req, res) {
  const event = await Event.findById(req.params.id);
  res.status(200).json(event);
}

async function create(req, res) {
  const event = await Event.create(req.body);
  res.status(201).json(event);
}

async function update(req, res) {
  const updateEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updateEvent);
}

async function deleteOne(req, res) {
  const deleteEvent = await Event.findByIdAndRemove(req.params.id);
  res.status(200).json(deleteEvent);
}


// function create(req, res) {
//     const event = new Event(req.body);
//     try {
//       event.save();
//     } catch (err) {
//       // Probably a duplicate email
//       res.status(400).json(err);
//     }
//   }
// async function create(req, res) {
//     const event = new Event(req.body);
//     try {
//       await event.save();
//     } catch (err) {
//       // Probably a duplicate email
//       res.status(400).json(err);
//     }
//   }