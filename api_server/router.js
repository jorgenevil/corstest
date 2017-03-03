const express = require('express')
const router = express.Router()

module.exports = function() {

  router.post('/api/user/login', (req, res, next) => {
    req.session.uuid = '#123.unique.user.id';
    res.status(200).json({"message":"We are in!"})
  })

  router.get('/api/user/logout', (req, res, next) => {
    res.status(200).json({uuid: req.session.uuid})
  })

  return router

}