const express = require('express')
const router = express.Router()

const controllers = require('../controllers')
const filter = req.query


router.get('/:resource', (req, res) => {
    const resource = req.params.resource
    const controller = controllers[resource]

    if (controller == null) {
        res.json({
            confirmation: 'Fail',
            message: 'Invalid Resource'
        })
        return
    }

    controller.get(filter)
        .then(data => {
            res.json({
                confirmation: 'Success',
                data: data
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'Faild',
                message: err.message
            })
        })
})


router.get('/:resource/:id', (req, res) => {
    const resource = req.params.resource
    const id = req.params.id

    const controller = controllers[resource]
    if(controller == null){
        res.json({
            confirmation: 'Fail',
            message: 'Invalid Resource'
        })
        return
    }
    controller.getById(id)
    .then(data=>{
        res.json({
            confirmation: 'True',
            data: data
        })
    })
    .catch(err=>{
        res.json({
            confirmation: 'False',
            message: err.message
        })
    })
})

module.exports = router