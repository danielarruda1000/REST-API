const Country = require('../models/Country')

module.exports = {

    get: (params) =>{
        return new Promise((resolve, reject)=>{
            Country.find(params)
            .then(data=>{
                resolve(data)
            })
            .catch(err =>{
                reject(err)
            })
        })
    }

}