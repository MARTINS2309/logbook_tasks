const express = require('express')
const router = express.Router()

const sampleProducts= { 
    data: [{
        id: 1,
        name: "Product 1",
        createdAt:	"2022-02-18T10:47:49.151Z",
        updatedAt:	"2022-02-18T10:58:40.866Z",
        publishedAt:	"2022-02-18T10:58:40.865Z"
    }, {
        id: 2,
        name: "Product 2",
        createdAt:	"2022-02-18T10:47:49.151Z",
        updatedAt:	"2022-02-18T10:58:40.866Z",
        publishedAt:	"2022-02-18T10:58:40.865Z"
    }, {
        id: 3,
        name: "Product 3",
        createdAt:	"2022-02-18T10:47:49.151Z",
        updatedAt:	"2022-02-18T10:58:40.866Z",
        publishedAt:	"2022-02-18T10:58:40.865Z"
    }]
}

function getProducts(req, res) {
    res.json(sampleProducts)
    console.log('GET products')
}

function getProductID(req, res) {
    const id = req.params.id
    const product = sampleProducts.data.find(product => product.id === id)
    res.json(product)
    console.log('GET product by id - ' + req.params.id)
}

// create a GET route for all Products
router.get('/', getProducts);

// create route to Get Product by id
router.route('/:id').get(getProductID);

module.exports = { router, getProducts, getProductID }