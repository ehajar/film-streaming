const express = require('express')
const router = express.Router();
router.use(express.json())
const controller = require('../controllers/userscontroller')

router.post('/api/auth',controller.connect)
router.post('/api/register',controller.register)

module.exports = router;
