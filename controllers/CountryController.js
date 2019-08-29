const Country = require('../models/Country')

module.exports = {

    get: (params) => {
        return new Promise((resolve, reject) => {
            Country.find(params)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            Country.findById(id)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

}