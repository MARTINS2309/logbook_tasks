const TableBody = ({ tableData, columns }) => {
  const result = Array.isArray(tableData);
  if (result) {
    return (
      <tbody>
        {tableData.map((data) => {
          return (
            <tr key={data.id}>
              {columns.map(({ accessor }) => {
                const tData = data[accessor] ? data[accessor] : "——";
                return <td key={accessor}>{tData}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    );
  } else {
    return <tbody></tbody>;
  }
};

export default TableBody;
