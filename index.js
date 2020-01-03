const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const path = require('path')

const sqlite = require('sqlite')
const dbConnection = sqlite.open(path.resolve(__dirname, 'banco.sqlite'), { Promise })

const port = process.env.PORT || 3000

const routes = require('./routes')

app.use('/admin', (req, res, next) => {
    if (req.hostname === 'localhost') {
        next()
    } else {
        res.send('Not allowed')
    }
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes(dbConnection))

const init = async () => {
    const db = await dbConnection
    await db.run('create table if not exists categorias (id integer primary key, categoria text)')
    await db.run('create table if not exists vagas (id integer primary key, categoria integer, titulo text, descricao text)')
}

init()

app.listen(port, (err) => {
    if (err) {
        console.log('Não foi possível iniciar o servidor do jobify')
    } else {
        console.log('Servidor do jobify rodando')
    }
})
