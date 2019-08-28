const express = require('express')
const bodyParser = require('body-parser')
const api = require('./routes/api')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/restapi', { useNewUrlParser: true }, () => {
    console.log('conectado com o Mongo!')
})

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/api', api)

app.get('/', (req, res) => {
    res.send('Ola')
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))