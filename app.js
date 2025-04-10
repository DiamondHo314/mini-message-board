const express = require('express')
const app = express()
const indexRouter = require('./routes/indexRouter')
const formRouter = require('./routes/formRouter')
const detailrouter = require('./routes/detailRouter')
const path = require('path')

const assetsPath = path.join(__dirname, "public")

app.use(express.static(assetsPath))

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true })) 
//express.urlencoded is necessary to console log req.body in formcontroller.js
//if we dont use this the console log says 'undefined'

app.use((req, res, next) => {
    console.log('testing middleware..')
    console.log(req.params)
    console.log(`requested for: ${req.hostname}`)
    console.log(`method called: ${req.method}`)
    next()
})

app.use('/', indexRouter)
app.use('/form', formRouter)
app.use('/messageDetails', detailrouter)

app.listen(8080, () =>{
    console.log('server listening on port 8080..')
})