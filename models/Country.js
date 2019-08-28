const mongoose = require('mongoose')

const Country = new mongoose.Schema({
    name: { type: String, default: '' },
    continent: { type: String, default: '' }
})

module.exports = mongoose.model('Country', Country)