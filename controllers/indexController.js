//const msgs = require('../messagesdb')
const db = require('../db/queries')

const getIndex = async (req, res) => {
    console.log('getting index page..')
    const msgs = await db.getAllDetails()
    
    res.render('index', {title: 'Mini Message Board', messages: msgs})
}

module.exports ={
    getIndex,
}