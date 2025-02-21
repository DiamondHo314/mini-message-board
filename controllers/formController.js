const msgDB = require('../messagesdb')
const getForm = (req, res) => {
    console.log('getting new form page..')
    
    res.render('form')
}

const postForm = (req, res) => {
    console.log(req.body) //displays the username and msgTxt (of input 'name' attribute)
    //{ username: 'spook', msgTxt: 'mrrrrrpp i don like bitter medicine wokkk' }, like this
    const reqBody = req.body

    const date = new Date();
    const day = `${date.getDate()} ${msgDB.months[date.getMonth()]}`
    console.log(day, date.getFullYear() + ', ' + (date.getHours() % 12) + ':' + date.getMinutes() + 'pm')

    const msgDate = `${day} ${date.getFullYear()}, ${(date.getHours() % 12)}:${date.getMinutes()}  pm`

    msgDB.messages.push({
        text: reqBody.msgTxt,
        user: reqBody.username,
        added: msgDate 
    })
    res.redirect('/')
}

module.exports = {
    getForm,
    postForm,
}