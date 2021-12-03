const express=require('express')
const controller = require("../controllers/commentairecontroller")
const router=express.Router()
router.use(express.json());

router.get("/api/comments/:filmId",controller.getComments)
router.post("/api/addComment/:filmId/:id",controller.createComment)


module.exports=router
