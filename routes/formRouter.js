const express = require('express')
const formrouter = express.Router()
const formcontroller = require('../controllers/formController')

formrouter.get('/', formcontroller.getForm)

formrouter.post('/', formcontroller.postForm)

module.exports = formrouter 