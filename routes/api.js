const express = require('express')
const router = express.Router()

const controllers = require('../controllers')



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

    controller.get()
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
    if (controller == null) {
        res.json({
            confirmation: 'Fail',
            message: 'Invalid Resource'
        })
        return
    }
    controller.getById(id)
        .then(data => {
            res.json({
                confirmation: 'True',
                data: data
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'False',
                message: err.message
            })
        })
})


router.post('/:resource', (req, res) => {
    const resource = req.params.resource
    const controller = controllers[resource]

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource'
        })
        return
    }

    controller.post(req.body)
        .then(data => {
            res.json({
                confirmation: 'Success',
                data: data
            })
                .catch(err => {
                    res.json({
                        confirmation: 'FAIL to PUT',
                        message: err.message
                    })
                })
        })
})

router.put('/:resource/:id', (req, res) => {
    const resource = req.params.resource
    const controller = controllers[resource]
    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource'
        })
        return
    }

    controller.put(req.params.id, req.body)
        .then(data => {
            res.json({
                confirmation: 'Success',
                data: data
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
        })
})


router.delete('/:resource/:id', (req, res) => {
    const resource = req.params.resource
    const controller = controllers[resource]
    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource'
        })
        return
    }

    controller.delete(req.params.id)
    .then(data=>{
        res.json({
            confirmation: 'Deleted!',
            data: data
        })
    })
    .catch(err =>{
        res.json({
            confirmation: 'Fail',
            message: err.message
        })
    })
})

module.exports = router