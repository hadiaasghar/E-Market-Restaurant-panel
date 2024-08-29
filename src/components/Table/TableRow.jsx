import PropTypes from 'prop-types';


const TableRow = ({ data }) => (
  <tr className="text-center">
    <td className="p-2 border">
      <input type="checkbox" />
    </td>
    <td className="p-2 border">{data.orderId}</td>
    <td className="p-2 border">{data.client}</td>
    <td className="p-2 border">{data.drivers}</td>
    <td className="p-2 border">{data.orderStatus}</td>
    <td className="p-2 border">{data.amount}</td>
    <td className="p-2 border">{data.orderType}</td>
    <td className="p-2 border">{data.date}</td>
    <td className="p-2 border">
      <button className="text-blue-500 hover:text-blue-700">Edit</button>
      <button className="ml-2 text-red-500 hover:text-red-700">Delete</button>
    </td>
  </tr>
);

TableRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default TableRow