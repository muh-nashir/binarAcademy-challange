// const bcrypt = require('bcrypt')

global.users = [
  {
    id: 84758945398454395,
    username: 'username',
    password: 'password'
  }
]

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const routers = require('./routers')

// Module untuk autentikasi
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.urlencoded({ extended: false})) // untuk mengirim data dari form melalui parameter req
app.use(express.json())

// Middleware untuk autentikasi & session
app.use(flash())
app.use(session({
  secret: 'fejsbinar',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use( (req, res, next) => {
  req.app.set('layout','layouts/default')
  next()
})

app.get('/', (req,res) => {
  console.log(req.user)
  res.render('index', {
    myArray: [
      { angka: 1},
      { angka: 2},
      { angka: 3},
      { angka: 4},
      { angka: 5},
      { angka: 6},
    ]
  } )
})
app.post('/logout', (req,res) => {
  req.logout()
  res.redirect('/auth/login')
})
app.use('/user/', routers.user)
app.use('/auth/', routers.auth)

app.listen()