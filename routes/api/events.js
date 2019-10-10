const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/events');

// router.get('/eventadd', eventsCtrl.create);

// router.use(require('../../config/auth');
router.post('/eventadd', eventsCtrl.create);
// router.post('/eventadd', checkAuth, eventsCtrl.create);

// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
// }

module.exports = router;