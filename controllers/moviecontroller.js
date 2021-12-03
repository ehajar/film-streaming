const Film = require('../models/Movie')


createmovie = (req, res) => {
  let newFilm = {
    title: req.body.title,
    poster_path: req.body.poster_path
  }
  Film.save(newFilm).then(result => res.status(200).send({
    message: 'film créé avec succès!'
  })).catch(error => res.status(400).send({
    err: error
  }))
}

deleteFilm = (req, res) => {
  let idFilm = req.params.id;
  Film.delete({_id: idFilm})
}
findmovies = (req, res) => {
  // let id=req.params.id
  res.send(films)
}
findmovie = (req, res) => {
  film.find().then((result) => {
    res.status(200).send({
      message: 'film retrouvé',
      data: result
    })
  })
    .catch(error => res.status(400).send({
      err: error
    }))
}

findmoviebyid = (req, res) => {
  // let id=req.params.id
  let id = req.params.id
  res.send(films.find(x => x.id === id))
}
updatemovie = (req, res) => {

}

module.exports = {createmovie, findmovie, findmoviebyid, updatemovie, updatemovie}
