const productsModule = require('../src/routes/products');
const productsGetHandler = productsModule.getProducts;
const productGetByIdHandler = productsModule.getProductID;

describe("Test Products Handlers", function () {
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

    test('responds to GET', () => {
        const req = {};
        const res = { json: function (data) {
            expect(data).toEqual(sampleProducts);
        } };

        productsGetHandler(req, res);
    });

    test('responds to GET by id:1', () => {
        const req = {params: {id: 1}};
        const res = { json: function (data) {
            expect(data).toEqual(sampleProducts.data[0]);
        }};

        productGetByIdHandler(req, res);
    });

    test('responds to GET by id:2', () => {
        const req = {params: {id: 2}};
        const res = { json: function (data) {
            expect(data).toEqual(sampleProducts.data[1]);
        }};

        productGetByIdHandler(req, res);
    });

});