import { useState, useEffect } from "react";
import { StockDetail } from "./StockDetail";

export function StockOverview() {
  const [products, setProducts] = useState({
    data: [
      {
        id: 1,
        name: "Product 1",
        createdAt: "2022-02-18T10:47:49.151Z",
        updatedAt: "2022-02-18T10:58:40.866Z",
        publishedAt: "2022-02-18T10:58:40.865Z",
      },
    ],
  });
  const [stockEvents, setStockEvents] = useState({
    data: [
      {
        id: 1,
        name: "Stock Event 1",
        product_id: 1,
        quantity: 1000,
        createdAt: "2022-02-18T10:47:49.151Z",
        updatedAt: "2022-02-18T10:58:40.866Z",
        publishedAt: "2022-02-18T10:58:40.865Z",
      },
    ],
  });

  const fetchData = async ({ setData, url }) => {
    const res = await fetch(url);
    setData(await res.json());
  };

  useEffect(() => {
    fetchData({
      setData: setProducts,
      url: "http://localhost:3001/products",
    });
    fetchData({
      setData: setStockEvents,
      url: "http://localhost:3001/stockevents",
    });
  }, []);

  return (
    <div className="ProductDisplay">
      {products.data.map((product) => {
        const { id } = product;
        const relevantStockEvents = stockEvents.data.filter(
          (stockEvent) => stockEvent.product_id === id
        );

        const totalQuantity = relevantStockEvents.reduce(
          (total, stockEvent) => total + stockEvent.quantity,
          0
        );

        return (
          <div className="ProductDisplay__product" key={id}>
            <h1>{product.name}</h1>
            <p>Total quantity: {totalQuantity}</p>
            <StockDetail stockEvents={relevantStockEvents} />
          </div>
        );
      })}
    </div>
  );
}
