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
    },
    post: (params) => {
        return new Promise((resolve, reject) => {
            Country.create(params)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    put: (id, params) => {
        return new Promise((resolve, reject) => {
            Country.findByIdAndUpdate(id, params, { new: true })
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    delete: (id) => {
        return new Promise((resolve, reject) => {
            Country.findByIdAndRemove(id)
                .then(() => {
                    resolve({ id: id })
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

}