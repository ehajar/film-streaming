
const url= require('url')
const express=require('express')
const router=express.Router()
router.use(express.json());

const controller = require("../controllers/moviecontroller")



router.get('/api/films',controller.findmovie);


router.get('/api/films/:id',findmoviebyid);
router.post('/api/films',createmovie);
router.put('/films')


module.exports=router
