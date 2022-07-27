import TableT from "./Table/TableT";
export function StockDetail(relEvents) {
  const columnsStockEvent = [
    { label: "id", accessor: "id", sortable: true },
    { label: "Product", accessor: "product_id", sortable: true },
    { label: "Quantity", accessor: "qty", sortable: true },
    { label: "Created At", accessor: "created_at", sortable: true },
    { label: "Updated At", accessor: "updated_at", sortable: true },
    { label: "Published At", accessor: "published_at", sortable: true },
  ];

  return (
    <div className="TableT">
      <TableT
        columns={columnsStockEvent}
        data={relEvents}
        caption="Stock Events"
      />
    </div>
  );
}
