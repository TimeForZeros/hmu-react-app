const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/events');

router.get('/', eventsCtrl.index);
router.get('/:id', eventsCtrl.detail);
router.post('/', eventsCtrl.create);
router.put('/:id', eventsCtrl.update);
router.delete('/:id', eventsCtrl.delete);

// router.use(require('../../config/auth');
// router.post('/eventadd', checkAuth, eventsCtrl.create);

// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
// }

module.exports = router;