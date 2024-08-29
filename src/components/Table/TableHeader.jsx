const TableHeader = () => (
  <thead>
    <tr>
      <th className="p-2 border">
        <input type="checkbox" />
      </th>
      <th className="p-2 border">Order ID</th>
      <th className="p-2 border">Client</th>
      <th className="p-2 border">Drivers</th>
      <th className="p-2 border">Order Status</th>
      <th className="p-2 border">Amount</th>
      <th className="p-2 border">Order Type</th>
      <th className="p-2 border">Date</th>
      <th className="p-2 border">Actions</th>
    </tr>
  </thead>
);
export default TableHeader