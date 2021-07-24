const express = require('express')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express()

const port = 5000

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(port, function() {
    console.log('App listing on port 5000!')
})

module.exports = app
