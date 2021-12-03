const express = require('express')
const router = express.Router();
router.use(express.json())
const controller = require('../controllers/favoriscontroller')

router.get('/api/favoris/:id/:idfilm', controller.addFavoris);
router.get('/api/isLiked/:id/:idfilm', controller.isLiked);
router.get('/api/userLikes/:id', controller.getUserLikes);

module.exports=router;
