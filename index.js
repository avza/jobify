const sqlite = require('sqlite')
const path = require('path')
const dbConnection = sqlite.open(path.resolve(__dirname, 'banco.sqlite'), { Promise })
const app = require('./app')(dbConnection)

const port = process.env.PORT || 3000

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
