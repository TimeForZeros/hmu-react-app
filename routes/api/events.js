const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/events');

router.post('/eventadd', eventsCtrl.create);
// router.get('/events', eventsCtrl.index);

// router.use(require('../../config/auth');
// router.post('/eventadd', checkAuth, eventsCtrl.create);

// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
// }

module.exports = router;