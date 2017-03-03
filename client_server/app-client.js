const express = require('express')
const app = module.exports = express()
const path = require('path')
const bodyParser = require('body-parser')
const server = require('http').createServer(app)


// ******************
// * Enable parsers *
// ******************
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

// *******************
// * Set public path *
// *******************
app.use(express.static(path.join(__dirname, 'public')))

// **********************
// * Set error handlers *
// **********************
server.listen(8043, function () {
  console.log('Express server listening on port 8043')
})

