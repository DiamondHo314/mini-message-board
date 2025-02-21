const msgs = require('../messagesdb')

const getIndex = (req, res) => {
    console.log('getting index page..')
    res.render('index', {title: 'Mini Message Board', messages: msgs.messages })
}

module.exports ={
    getIndex,
}