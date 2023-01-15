require('dotenv').config()
require('./schema/connection')
const mongoose = require("mongoose")
const express = require('express')
const ejs = require('ejs')
const path = require('path')
const session = require('express-session')
const router = require('./routes/expressRoutes.js')
const taskModel = require('./schema/mongooseSchema')
const exp = require('constants')
// const ejsLint = require('ejs-lint');


const port = process.env.PORT || 5000
const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(express.static(__dirname))
server.use(router)
server.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))


server.set('view engine', 'ejs')


server.listen(port, () => {
    console.log(`Server is listening at ${port}`);
})