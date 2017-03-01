const express = require('express')
const router = express.Router()

module.exports = function() {

  router.get('/', (req, res, next) => {

    // ***************************
    // * SAVE USER ID IN SESSION *
    // ***************************
    req.session.uuid = '#123.unique.user.id';

    res.status(200).json({"message":"We are in!"})
  })

  router.get('/cookiemonster', (req, res, next) => {

    // ****************************
    // * GET USER ID FROM SESSION *
    // ****************************
    console.log('UUID => ', req.session.uuid)

    res.status(200).json({uuid: req.session.uuid})

  })

  return router

}