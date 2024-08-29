import PropTypes from "prop-types";

const OrdersTable = ({ data }) => (
  <table className="min-w-full bg-white">
    <thead>
      <tr>
        <th className="p-2 border">Select</th>
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
    <tbody>
    {Array.isArray(data) && data.length === null ? (
    <tr>
      <td colSpan="9" className="p-2 border text-center">
        No results
      </td>
    </tr>
  ) : (
    Array.isArray(data) &&
    data.map((item, index) => (
      <tr key={index} className="text-center">
        <td className="p-2 border">
          <input type="checkbox" />
        </td>
        <td className="p-2 border">{item.orderId}</td>
        <td className="p-2 border">{item.client}</td>
        <td className="p-2 border">{item.drivers}</td>
        <td className="p-2 border">{item.orderStatus}</td>
        <td className="p-2 border">{item.amount}</td>
        <td className="p-2 border">{item.orderType}</td>
        <td className="p-2 border">{item.date}</td>
        <td className="p-2 border">
          <button className="text-blue-500 hover:text-blue-700">Edit</button>
          <button className="ml-2 text-red-500 hover:text-red-700">
            Delete
          </button>
        </td>
      </tr>
    ))
  )}
    </tbody>
  </table>
);

OrdersTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      orderId: PropTypes.string.isRequired,
      client: PropTypes.string.isRequired,
      drivers: PropTypes.string.isRequired,
      orderStatus: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      orderType: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default OrdersTable;
