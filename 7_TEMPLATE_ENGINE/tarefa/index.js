const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {

    const items = ['Item a', 'Item b', 'Item c']

    res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender node.js',
        category: 'Javascript',
        body: 'Este arquivo vai te ajudar a aprender Node.js',
        coments: 4,
    }

    res.render('blogpost', {post})
})


app.get('/blog', (req, res) => {
    const posts = [
        {
            title: "Aprender Node.js",
            category: "Javascript",
            body: "Teste",
            coments: 4
        },
        {
            title: "Aprender Python",
            category: "Python",
            body: "Teste",
            coments: 4
        },
        {
            title: "Aprender PHP",
            category: "PHP",
            body: "Teste",
            coments: 4
        }
    ]

    res.render('blog', {posts})
})

app.get('/', (req, res) => {

    const user = {
        name : "Mateus",
        surname :"silva",
        age: 27,
    }

    const produtos = [
        {
            item : "Tv",
            descricao: "smart tv 42",
            valor: 3.500
        },
        {
            item: "Notebook",
            descricao: "Lenovo 19 polegadas",
            valor: 4.000
        }
    ]

    

    const auth = true

    const palavra = 'teste'

    
    res.render('home', {user: user, palavra, auth, produtos})
})

app.listen(3000, () => {
    console.log('App funcionando');
    
})