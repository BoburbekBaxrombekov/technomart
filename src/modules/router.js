const { Router } = require('express')
const router = new Router()
const Product = require('./product/product')
router
    .get('/product/all', Product.GET)
    .post('/product/add', Product.POST)
    .put('/product/edit/:id', Product.UPDATE)
    .delete('/product/delete/:id', Product.DELETE)

module.exports = router