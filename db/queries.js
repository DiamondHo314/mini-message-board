const pool = require('./pool')

async function getAllDetails() {
    const { rows } = await pool.query('SELECT * FROM message_info')

   // console.log(rows)
   // rows.forEach(showDetail)
   // 
   // function showDetail(msg){
   //     console.log(`user: ${msg.username}`)
   //     console.log(`text: ${msg.text}`)
   // }

    return rows 
}

async function addMessage(user, text, added) {
   await pool.query('INSERT INTO message_info (username, text, added) VALUES ($1, $2, $3)', [user, text, added]) 
}

module.exports = {
    getAllDetails,
    addMessage,
}