const Favoris = require('../models/Favoris')
const User = require("../models/User");

addFavoris = (req, res) => {
  const userId = req.params.id;
  const filmId = req.params.idfilm;

  User.findById(userId).then(rsp => {
    const favoris = {
      filmId: filmId,
      User: rsp
    }
    Favoris.findOne(favoris).then(data => {
      if (data == null) {
        new Favoris(favoris).save();
        res.status(200).send({
          message: 'Favoris ajoutée !'
        })
      } else {
        data.delete();
        res.status(200).send({
          message: 'Favoris supprimé!'
        })
      }
    })

  })


}

isLiked = (req, res) => {
  const userId = req.params.id;
  const filmId = req.params.idfilm;

  User.findById(userId).then(rsp => {
    const favoris = {
      filmId: filmId,
      User: rsp
    }
    Favoris.findOne(favoris).then(data => {
      if (data == null) {
        res.status(200).send({
          isLiked: false
        })
      } else {
        res.status(200).send({
          isLiked: true
        })
      }
    })

  })


}

getUserLikes = (req, res) => {
  const userId = req.params.id;
  User.findOne({_id: userId}).then(user => {
    Favoris.where({user: user}).then(favList => {
      res.status(200).send(favList)
    })
  })
}


module.exports = {addFavoris, isLiked,getUserLikes};
