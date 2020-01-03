const init = dbConnection => {
    const adminController = require('../controllers/admin')

    const router = require('express').Router()

    router.get('/', adminController.index)
    router.get('/vagas', adminController.recuperarVagas(dbConnection))
    router.get('/vagas/delete/:id', adminController.excluirVaga(dbConnection))
    router.get('/vagas/nova', adminController.novaVaga(dbConnection))
    router.post('/vagas/nova', adminController.cadastrarVaga(dbConnection))
    router.get('/vagas/editar/:id', adminController.recuperarVaga(dbConnection))
    router.post('/vagas/editar/:id', adminController.editarVaga(dbConnection))
    router.get('/categorias', adminController.recuperarCategorias(dbConnection))
    router.get('/categorias/nova', adminController.novaCategoria)
    router.post('/categorias/nova', adminController.cadastrarCategoria(dbConnection))
    router.get('/categorias/delete/:id', adminController.excluirCategoria(dbConnection))
    router.get('/categorias/editar/:id', adminController.recuperarCategoria(dbConnection))
    router.post('/categorias/editar/:id', adminController.editarCategoria(dbConnection))

    return router
}
module.exports = init