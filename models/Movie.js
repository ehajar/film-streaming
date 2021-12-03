
mongoose=require('mongoose');
let movieSchema=new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    vote_average:Number,
    poster_path:String,
    original_title:String,
    overview:String,
    release_date:String

});

module.exports=mongoose.model('Movie',movieSchema)
