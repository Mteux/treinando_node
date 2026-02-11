const express = require('express')
const exphbs = require('express-handlebars')
const db = require('./db')


const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`
    db.run(sql, function(err) {
        if (err) {
            console.log(err);
            
        }

        res.redirect('/')
    })


})
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
        
})
    
