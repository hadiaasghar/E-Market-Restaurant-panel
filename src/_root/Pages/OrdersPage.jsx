import Orders from "../../components/Order/Orders";
import TableRow from "../../components/Table/TableRow";

const OrdersPage = () => {
  const data = [
    {
      orderId: "001",
      client: "John Doe",
      drivers: "Driver 1",
      orderStatus: "Completed",
      amount: "$100",
      orderType: "Dine In",
      date: "2024-08-13",
    },
    {
      orderId: "002",
      client: "Jane Doe",
      drivers: "Driver 2",
      orderStatus: "Pending",
      amount: "$200",
      orderType: "Take Away",
      date: "2024-08-13",
    },
    {
      orderId: "003",
      client: "John Doe",
      drivers: "Driver 3",
      orderStatus: "Shipped",
      amount: "$300",
      orderType: "Dine In",
      date: "2024-08-13",
    },
    {
      orderId: "004",
      client: "Jane Doe",
      drivers: "Driver 4",
      orderStatus: "Confirmed",
      amount: "$400",
      orderType: "Take Away",
      date: "2024-08-13",
    },
    {
      orderId: "005",
      client: "John Doe",
      drivers: "Driver 5",
      orderStatus: "Completed",
      amount: "$500",
      orderType: "Dine In",
      date: "2024-08-13",
    },
    {
      orderId: "006",
      client: "Jane Doe",
      drivers: "Driver 6",
      orderStatus: "Pending",
      amount: "$600",
      orderType: "Take Away",
      date: "2024-08-13",
    },
    {
      orderId: "007",
      client: "John Doe",
      drivers: "Driver 7",
      orderStatus: "Shipped",
      amount: "$700",
      orderType: "Dine In",
      date: "2024-08-13",
    },
    {
      orderId: "008",
      client: "Jane Doe",
      drivers: "Driver 8",
      orderStatus: "Confirmed",
      amount: "$800",
      orderType: "Take Away",
      date: "2024-08-13",
    },
    {
      orderId: "009",
      client: "John Doe",
      drivers: "Driver 9",
      orderStatus: "Completed",
      amount: "$900",
      orderType: "Dine In",
      date: "2024-08-13",
    },
    {
      orderId: "010",
      client: "Jane Doe",
      drivers: "Driver 10",
      orderStatus: "Pending",
      amount: "$1000",
      orderType: "Take Away",
      date: "2024-08-13",
    },
    {
      orderId: "011",
      client: "John Doe",
      drivers: "Driver 11",
      orderStatus: "Shipped",
      amount: "$1100",
      orderType: "Dine In",
      date: "2024-08-13",
    },
    {
      orderId: "012",
      client: "Jane Doe",
      drivers: "Driver 12",
      orderStatus: "Confirmed",
      amount: "$1200",
      orderType: "Take Away",
      date: "2024-08-13",
    }
  ];
  return (
    <div>
      <Orders data={data}/>
      {/* <TableRow data={data}/> */}
    </div>
  )
}

export default OrdersPage
