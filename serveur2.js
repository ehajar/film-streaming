
const url= require('url')
const express=require('express')

const app=express()

const films = [
    {
        id:"1",
       poster_path: 'https://img.betaseries.com/ViqDCTIU9RC_hiRDLuQNfB4y7mY=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffilms%2Faffiches%2Foriginal%2F376.jpg',
       original_title:'Harry Potter And The Philosophers Stone',
       vote_average:7,
       overview:'',
       release_date:'2001'

    },
    {
        id:"2",
        poster_path: 'https://i2.wp.com/cinedweller.com/wp-content/uploads/2020/02/Parasite-PASTICHE-SM.jpg?resize=384%2C512&ssl=1',

        original_title:'Parasite',
        vote_average:9,

        overview: 'This movie is korean and won an oscar',
        release_date:'2019',
    },
    {
        id:"3",
        poster_path: 'https://imgc.allpostersimages.com/img/posters/lord-of-the-rings-1-the-fellowship-of-the-ring_u-L-F4Q0XW0.jpg?artHeight=550&artPerspective=n&artWidth=550',

        original_title:'Lord Of The Rings 1',
        vote_average:9,

        overview: 'this movie is american',
        release_date:'2001',
    },]




app.get('/films',(req,res)=>{
   // let id=req.params.id
    res.send(films)
});


app.get('/films/:id',(req,res)=>{
    // let id=req.params.id
    let id=req.params.id


     res.send( films.find(x => x.id === id))
 });

 app.use(express.json());

 app.post('/films',
 (req,res)=>{ console.log(req.body)
    res.status(200).json({
        message: 'Objet créé !'
      });
 }
 )

app.listen(3000)
