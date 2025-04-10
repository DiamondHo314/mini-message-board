//const msgDB = require('../messagesdb')
const db = require('../db/queries')
const getForm = (req, res) => {
    console.log('getting new form page..')
    
    res.render('form')
}


async function postForm (req, res) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(req.body) //displays the username and msgTxt (of input 'name' attribute)
    //{ username: 'spook', msgTxt: 'mrrrrrpp i don like bitter medicine wokkk' }, like this
    const { username, msgTxt }= req.body

    const date = new Date();
    const day = `${date.getDate()} ${months[date.getMonth()]}`
    console.log(day, date.getFullYear() + ', ' + (date.getHours() % 12) + ':' + date.getMinutes() + 'pm')

    const msgDate = `${day} ${date.getFullYear()}, ${(date.getHours() % 12)}:${date.getMinutes()}  pm`

    //msgDB.messages.push({
        //text: reqBody.msgTxt,
        //user: reqBody.username,
        //added: msgDate 
    //})
    await db.addMessage(username, msgTxt, msgDate)
    
    res.redirect('/')
}

module.exports = {
    getForm,
    postForm,
}