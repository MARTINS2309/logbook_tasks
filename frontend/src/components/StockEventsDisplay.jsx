import TableT from "./Table/TableT";
export default function StockEventsDisplay({ relEvents }) {
  const columnsStockEvent = [
    { label: "id", accessor: "id", sortable: true },
    { label: "Name", accessor: "name", sortable: true },
    { label: "Quantity", accessor: "quantity", sortable: true },
    { label: "Created At", accessor: "createdAt", sortable: true },
    { label: "Updated At", accessor: "updatedAt", sortable: true },
    { label: "Published At", accessor: "publishedAt", sortable: true },
  ];

  return (
    <div className="StockEventsDisplay">
      <TableT
        columns={columnsStockEvent}
        data={relEvents}
        caption="Stock Event"
      />
    </div>
  );
}
