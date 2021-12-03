const Comment = require('../models/Comments')
const User = require('../models/User')


getComments = (req, res) => {
  const filmId = req.params.filmId;
  Comment.where({filmId: filmId}).then(async commentList => {
    for (const commentListElement of commentList) {
      await User.findById(commentListElement.user).then(user => {
        commentListElement.user = user;
      })
    }
    res.status(200).send(commentList ? commentList : []);
  })
}

createComment = (req, res) => {
  const filmId = req.params.filmId;
  const userId = req.params.id;
  const body = req.body;

  User.findById(userId).then(user => {
    const data = {
      filmId: filmId,
      user: user,
      message: body.message
    }
    new Comment(data).save()
    res.status(200).send({message: "Done"});
  })


}

module.exports = {getComments, createComment}
