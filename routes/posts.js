const router = require('express').Router();
const verify = require('./verifyToken');
router.get('/', verify, (req, res) => {
    res.send(req.user);
});
// const verify = require('./verifyToken');
// router.get('/', verify, (req, res) => {
//     res.send(req.tpo);
// });
module.exports = router;