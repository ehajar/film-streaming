const User = require('../models/User')

connect = (req, res) => {
  let user = req.body;
  // User.user => User[]
  // req.params.x
  User.findOne({login: user.login, password: user.password}).then((re) => {
    if (re == null) {
      res.status(200).send({allow: false})
    } else  {
      res.status(200).send({allow: true, id: re._id, login: user.login})
    }
  })
}


register = (req, res) => {

  let newUser = {
    login: req.body.email,
    password: req.body.password
  }

  User.findOne({login: newUser.login}).then((re) => {
    if (re == null) {
      new User(newUser).save().then(result => {
        res.status(200).send({
          message: 'User crée!'
        })
      },error => {
        res.status(400).send({
          err: error
        })
      });

    } else {
      res.status(400).send({
        err: "user exists"
      })
    }
  })


}


module.exports = {connect, register}
