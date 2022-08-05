import StockEventsDisplay from "./StockEventsDisplay";

export default function ProductsDisplay({ products, stockEvents }) {
  return (
    <div className="ProductsDisplay">
      {products.map((product) => {
        const { id } = product;
        const relevantStockEvents = stockEvents.filter(
          (stockEvent) => stockEvent.product_id === id
        );
        const totalQuantity = relevantStockEvents.reduce(
          (total, stockEvent) => total + stockEvent.quantity,
          0
        );

        return (
          <div className="PD__product" key={id}>
            <h1 className="PD__name">{product.name}</h1>
            <p className="PD__quantity">Total quantity: {totalQuantity}</p>

            <StockEventsDisplay relEvents={relevantStockEvents} />
          </div>
        );
      })}
    </div>
  );
}
