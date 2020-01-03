const init = dbConnection => {
    const express = require('express')
    const app = express()
    const bodyParser = require('body-parser')
    const routes = require('./routes')

    const path = require('path')

    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'ejs')
    app.use(express.static(path.join(__dirname, 'public')))
    app.use(bodyParser.urlencoded({ extended: true }))

    app.use('/admin', (req, res, next) => {
        if (req.hostname === 'localhost') {
            next()
        } else {
            res.send('Not allowed')
        }
    })

    app.use(routes(dbConnection))
    return app
}

module.exports = init