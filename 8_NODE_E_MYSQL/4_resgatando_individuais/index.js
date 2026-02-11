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

    const sql = `INSERT INTO books (title, pageqty) VALUES (?, ?)`
    db.run(sql, [title, pageqty], function(err) {
        if (err) {
            console.log(err);
            return
        }

        res.redirect('/books')
    })
})

app.get('/books', (req, res) => {
    const sql = "SELECT * FROM books"

    db.all(sql, function(err, data) {

        if (err) {
            console.log(err);
            return
        }

        const books = data
        console.log(books);

        res.render('books', {books})
        
    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM books WHERE id = ${id}`

    db.all(sql, function(err, data) {
        if (err) {
            console.log(err);
            return
        }

        const book = data[0]

        res.render('book', {book})
    })
})
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
        
})
    
