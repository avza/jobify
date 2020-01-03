const categoriasModel = require('../models/categoria')
const vagasModel = require('../models/vaga')

const index = dbConnection => async (req, res) => {
    const db = await dbConnection
    const categoriasDb = await categoriasModel.recuperarCategorias(db)()
    const vagas = await vagasModel.recuperarVagas(db)()
    const categorias = categoriasDb.map( cat => {
        return {
            ...cat,
            vagas: vagas.filter( v => v.categoria === cat.id)
        }
    })
    res.render('home', {
        categorias
    })
}
module.exports = {
    index
}