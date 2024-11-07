const UserController = require('../controllers/UserController');

const router = require('express').Router();


router.get('/user', UserController.getallusers);

module.exports = router