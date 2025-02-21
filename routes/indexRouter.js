const express  = require('express')
const indexrouter = express.Router()
const indexcontroller = require('../controllers/indexController')

indexrouter.get('/', indexcontroller.getIndex)

module.exports = indexrouter