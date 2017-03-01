const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

module.exports = function() {


  // ██████╗  █████╗  ██████╗ ███████╗
  // ██╔══██╗██╔══██╗██╔════╝ ██╔════╝
  // ██████╔╝███████║██║  ███╗█████╗  
  // ██╔═══╝ ██╔══██║██║   ██║██╔══╝  
  // ██║     ██║  ██║╚██████╔╝███████╗
  // ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝

  // PAGE => GET: login page
  router.get('/', function(res,res,next) {

    res.render('views/test', {
      title: 'TEST PAGE',
      layout: 'views/testLayout'
    })

  })

  return router

}