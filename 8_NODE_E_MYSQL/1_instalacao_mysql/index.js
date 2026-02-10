const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')
require('dotenv').config()
const db = require('./db')


const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    
})

conn.connect(function(err) {
    if (err) {
        console.error('Erro ao conectar ao mysql', err);
        process.exit(1)
    }

    console.log('Conectou ao MySQL')

    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
        
    })
    
})