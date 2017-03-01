const express = require('express')
const app = module.exports = express()
const path = require('path')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')()
const server = require('http').createServer(app)


// *********************
// * View engine setup *
// *********************
app.engine('.hbs', exphbs({
  defaultLayout: 'views/layouts/default',
  extname: '.hbs',
  layoutsDir: path.join(__dirname),
  partialsDir: path.join(__dirname)
}))

// set handlebars as view engine
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname))

// ******************
// * Enable parsers *
// ******************
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

// *******************
// * Set public path *
// *******************
app.use(express.static(path.join(__dirname, 'public')))

// *************
// * Set routs *
// *************
app.use('/', routes)

// **********************
// * Set error handlers *
// **********************
server.listen(8043, function () {
  console.log('Express server listening on port 8043')
})

