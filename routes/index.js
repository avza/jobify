const init = dbConnection => {
    const index = require('../controllers/index')
    const vagas = require('./vagas')
    const admin = require('./admin')

    const router = require('express').Router()

    router.get('/', index.index(dbConnection))
    router.use('/vaga', vagas(dbConnection))
    router.use('/admin', admin(dbConnection))
    
    return router
}
module.exports = init