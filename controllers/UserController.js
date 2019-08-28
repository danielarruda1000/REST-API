const User = require('../models/User')

module.exports = {

    get: (params) =>{
        return new Promise((resolve, reject)=>{
            User.find(params)
            .then(data=>{
                resolve(data)
            })
            .catch(err =>{
                reject(err)
            })
        })
    }

}