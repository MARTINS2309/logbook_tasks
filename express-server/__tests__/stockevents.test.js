const stockEventsModule = require("../src/routes/stockevents");
const stockEventsGetHandler = stockEventsModule.getStockEvents;
const stockEventGetByIdHandler = stockEventsModule.getStockEventID;

describe("Test Stock Events Handlers", function () {
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

  it("GetStockEvents should return all stock events", () => {
    const req = {};
    const res = {
      json: function (data) {
        expect(data).toEqual(sampleStockEvents);
      },
    };
    stockEventsGetHandler(req, res);
  });

  it("GetStockEventID should return a stock event by id:1", () => {
    const req = {
      params: {
        id: 1,
      },
    };
    const res = {
      json: function (data) {
        expect(data).toEqual(sampleStockEvents[0]);
      },
    };
    stockEventGetByIdHandler(req, res);
  });

  it("GetStockEventID should return a stock event by id:2", () => {
    const req = {
      params: {
        id: 2,
      },
    };
    const res = {
      json: function (data) {
        expect(data).toEqual(sampleStockEvents[1]);
      },
    };
    stockEventGetByIdHandler(req, res);
  });
});
