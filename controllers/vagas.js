const vagas = require('../models/vaga')

const recuperarVaga = dbConnection => async (req, res) => {
    const db = await dbConnection
    const vaga = await vagas.recuperarVaga(db)(req.params.id)
    res.render('vaga', {
        vaga
    })
}
module.exports = {
    recuperarVaga
}