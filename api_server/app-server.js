const express = require('express')
const app = module.exports = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const redis = require("redis")
const redisStore = require('connect-redis')(expressSession)
const redisClient = redis.createClient()
const cors = require('cors')
const routes = require('./router')()
const server = require('http').createServer(app)

const options = {
  sessionTTL: 60*60,
  expressSessionSecret: "Shhhh... I am secret"
}

// ************
// * Sessions *
// ************
var exSession = module.exports.exSession = expressSession({
  secret: options.expressSessionSecret,
  store: new redisStore({host: 'localhost', port: 6379, client: redisClient, ttl: options.sessionTTL }),
  proxy: true,
  signed: true,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 36000000
  },
  rolling: true,
  unset: 'destroy'
})

app.use(exSession)

// ********
// * CORS *
// ********
const whitelist = ['http://localhost:8033', 'http://localhost:8043']
const corsOptions = {
  // origin: function (origin, callback) {
  //   var originIsWhitelisted = whitelist.indexOf(origin) !== -1
  //   callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted)
  // },
  origin: true,
  credentials: true
}
app.use(cors(corsOptions))

// ******************
// * Enable parsers *
// ******************
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(cookieParser())

// *******************
// * Set public path *
// *******************
app.use(express.static(path.join(__dirname, 'public')))

// *************
// * Set routs *
// *************
app.use('/', routes)

// ****************
// * Start server *
// ****************
server.listen(8033, function () {
  console.log('Express server listening on port 8033')
})

