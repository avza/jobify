const init = dbConnection => {
    const vagas = require('../controllers/vagas')
    
    const router = require('express').Router()
    router.get('/:id', vagas.recuperarVaga(dbConnection))
    return router
}
module.exports = init