const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const users = require('./users')

const basePath = path.join(__dirname, 'templates')

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)  

})


module.exports = serve