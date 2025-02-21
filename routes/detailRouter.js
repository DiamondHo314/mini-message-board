const express = require('express')
const { messages } = require('../messagesdb')
const router = express.Router()

router.get('/', (req, res) =>{
    res.render('msgDetails', { messages: messages })
})

router.get('/:user', (req, res) =>{
    const { user }  = req.params
    res.render('msgDetails', {messages: messages, usrname: user})
})

module.exports = router