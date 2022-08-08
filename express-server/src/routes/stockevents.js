const express = require("express");
const router = express.Router();

const sampleStockEvents = [
  {
    id: 1,
    name: "Stock Event 1",
    product_id: 1,
    quantity: 10,
    createdAt: "2022-02-18T10:47:49.151Z",
    updatedAt: "2022-02-18T10:58:40.866Z",
    publishedAt: "2022-02-18T10:58:40.865Z",
  },
  {
    id: 2,
    name: "Stock Event 2",
    product_id: 1,
    quantity: -4,
    createdAt: "2022-02-18T10:47:49.151Z",
    updatedAt: "2022-02-18T10:58:40.866Z",
    publishedAt: "2022-02-18T10:58:40.865Z",
  },
  {
    id: 3,
    name: "Stock Event 3",
    product_id: 2,
    quantity: 2,
    createdAt: "2022-02-18T10:47:49.151Z",
    updatedAt: "2022-02-18T10:58:40.866Z",
    publishedAt: "2022-02-18T10:58:40.865Z",
  },
  {
    id: 4,
    name: "Stock Event 4",
    product_id: 3,
    quantity: 12,
    createdAt: "2022-02-18T10:47:49.151Z",
    updatedAt: "2022-02-18T10:58:40.866Z",
    publishedAt: "2022-02-18T10:58:40.865Z",
  },
];

function getStockEvents(req, res) {
  setTimeout(() => {
    res.json(sampleStockEvents);
    console.log("GET all stock events");
  }, 1000);
}

function getStockEventID(req, res) {
  const id = req.params.id;
  const stockEvent = sampleStockEvents.find(
    (stockEvent) => stockEvent.id == id
  );
  res.json(stockEvent);
  console.log("GET stock event by id - " + req.params.id);
}

// create a GET route for Stock Events
router.get("/", getStockEvents);

// create route to cover all by id requests
router.route("/:id").get(getStockEventID);

module.exports = { router, getStockEvents, getStockEventID };
