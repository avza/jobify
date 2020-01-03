const vagaModel = require('../models/vaga')
const categoriaModel = require('../models/categoria')

const index = (req, res) => {
    res.render('admin/home')
}
const recuperarVagas = dbConnection => async (req, res) => {
    const db = await dbConnection
    const vagas = await vagaModel.recuperarVagas(db)()
    res.render('admin/vagas', { vagas })
}
const excluirVaga = dbConnection => async (req, res) => {
    const db = await dbConnection
    await vagaModel.excluirVaga(db)(req.params.id)
    res.redirect('/admin/vagas')
}
const novaVaga = dbConnection => async (req, res) => {
    const db = await dbConnection
    const categorias = await categoriaModel.recuperarCategorias(db)()
    res.render('admin/nova-vaga', {
        categorias
    })
}
const cadastrarVaga = dbConnection => async (req, res) => {
    const { categoria, titulo, descricao } = req.body
    const db = await dbConnection
    await vagaModel.cadastrarVaga(db)(categoria, titulo, descricao)
    res.redirect('/admin/vagas')
}
const recuperarVaga = dbConnection => async (req, res) => {
    const db = await dbConnection
    const categorias = await categoriaModel.recuperarCategorias(db)()
    const vaga = await vagaModel.recuperarVaga(db)(req.params.id)
    res.render('admin/editar-vaga', {
        categorias,
        vaga
    })
}
const editarVaga = dbConnection => async (req, res) => {
    const { categoria, titulo, descricao } = req.body
    const { id } = req.params
    const db = await dbConnection
    await vagaModel.editarVaga(db)(id, categoria, titulo, descricao)
    res.redirect('/admin/vagas')
}
const recuperarCategorias = dbConnection => async(req, res) => {
    const db = await dbConnection
    const categorias = await categoriaModel.recuperarCategorias(db)()
    res.render('admin/categorias', { categorias })
}
const novaCategoria = (req, res) => {
    res.render('admin/nova-categoria')
}
const cadastrarCategoria = dbConnection => async (req, res) => {
    const { categoria } = req.body
    const db = await dbConnection
    await categoriaModel.cadastrarCategoria(db)(categoria)
    res.redirect('/admin/categorias')
}
const excluirCategoria = dbConnection => async (req, res) => {
    const db = await dbConnection
    await categoriaModel.excluirCategoria(db)(req.params.id)
    res.redirect('/admin/categorias')
}
const recuperarCategoria = dbConnection => async (req, res) => {
    const db = await dbConnection
    const categoria = await categoriaModel.recuperarCategoria(db)(req.params.id)
    res.render('admin/editar-categoria', { categoria })
}
const editarCategoria = dbConnection => async (req, res) => {
    const { categoria } = req.body
    const db = await dbConnection
    await categoriaModel.editarCategoria(db)(req.params.id, categoria)
    res.redirect('/admin/categorias')
}
module.exports = {
    index,
    recuperarVagas,
    excluirVaga,
    novaVaga,
    cadastrarVaga,
    recuperarVaga,
    editarVaga,
    recuperarCategorias,
    novaCategoria,
    cadastrarCategoria,
    excluirCategoria,
    recuperarCategoria,
    editarCategoria
}