const express=require('express');
const app = express();
const filmsRouter= require('./routes/filmsroute');
const userRouter= require('./routes/usersroute');
const favorisRouter= require('./routes/favorisroute');
const commentRouter= require('./routes/commentairesroute');
const cors = require('cors')

const mongoose = require("mongoose");
const env = require('./environment/env')
const path = require("path")

mongoose.connect(env.monogo)

app.use(cors("*"))
app.use(express.json());

app.use(filmsRouter);
app.use(userRouter);
app.use(favorisRouter);
app.use(commentRouter);

const PORT = process.env.PORT || 80

app.listen(PORT,()=>{console.log(`serveur démarré sous le lien\n\thttp://localhost:${PORT}`)})


app.use("/",express.static(path.join(__dirname,"angular")))

app.get('',(req,resp)=>{
  resp.sendFile(path.join(__dirname,"angular","index.html"))
})





