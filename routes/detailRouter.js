const express = require('express')
//const { messages } = require('../messagesdb')
const db = require('../db/queries')
const router = express.Router()

router.get('/', async (req, res) =>{
    const msgs = await db.getAllDetails()
    res.render('msgDetails', { messages: msgs })
})

router.get('/:user', async (req, res) =>{
    const { user }  = req.params
    res.render('msgDetails', {messages: await db.getAllDetails(), usrname: user})
})

module.exports = router