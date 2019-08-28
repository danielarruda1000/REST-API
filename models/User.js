const mongoose = require('mongoose')

const User = new mongoose.Schema({
    firstName: { type: String, default: '' },
    age: { type: Number, default: 0 },
    email: { type: String, default: '' }
})

module.exports = mongoose.model('User', User)