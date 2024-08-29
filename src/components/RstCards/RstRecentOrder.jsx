import React, { useState } from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import RstHeadingCard from "./RstHeadingCard";
import DataTableInfo from "./DataTableInfo";
import { BiMenu } from "react-icons/bi";

const RstRecentOrder = () => {
  const Orders = [
    {
      orderid: "",
      client: "",
      ordertype: "",
      totalamount: "",
      quantity: "",
      orderdate: "",
      orderstatus: "",
    },
  ];

  const [visibleOrders, setVisibleOrders] = useState(Orders.slice(0, 10));
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (column) => {
    const newSortDirection =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newSortDirection);

    const sortedOrders = [...Orders].sort((a, b) => {
      if (a[column] < b[column]) return newSortDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newSortDirection === "asc" ? 1 : -1;
      return 0;
    });

    setVisibleOrders(sortedOrders.slice(0, 10));
  };

  const handleclient = (column) => {
    const newSortDirection =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newSortDirection);

    const sortedOrders = [...Orders].sort((a, b) => {
      if (a[column] < b[column]) return newSortDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newSortDirection === "asc" ? 1 : -1;
      return 0;
    });

    setVisibleOrders(sortedOrders.slice(0, 10));
  };

  const handletotalamount = (column) => {
    const newSortDirection =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newSortDirection);

    const sortedOrders = [...Orders].sort((a, b) => {
      if (a[column] < b[column]) return newSortDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newSortDirection === "asc" ? 1 : -1;
      return 0;
    });

    setVisibleOrders(sortedOrders.slice(0, 10));
  };

  const handleordertype = (column) => {
    const newSortDirection =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newSortDirection);

    const sortedOrders = [...Orders].sort((a, b) => {
      if (a[column] < b[column]) return newSortDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newSortDirection === "asc" ? 1 : -1;
      return 0;
    });

    setVisibleOrders(sortedOrders.slice(0, 10));
  };

  const handlequantity = (column) => {
    const newSortDirection =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newSortDirection);

    const sortedOrders = [...Orders].sort((a, b) => {
      if (a[column] < b[column]) return newSortDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newSortDirection === "asc" ? 1 : -1;
      return 0;
    });

    setVisibleOrders(sortedOrders.slice(0, 10));
  };

  const handleorderdate = (column) => {
    const newSortDirection =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newSortDirection);

    const sortedOrders = [...Orders].sort((a, b) => {
      if (a[column] < b[column]) return newSortDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newSortDirection === "asc" ? 1 : -1;
      return 0;
    });

    setVisibleOrders(sortedOrders.slice(0, 10));
  };

  const handleorderstatus = (column) => {
    const newSortDirection =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newSortDirection);

    const sortedOrders = [...Orders].sort((a, b) => {
      if (a[column] < b[column]) return newSortDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newSortDirection === "asc" ? 1 : -1;
      return 0;
    });

    setVisibleOrders(sortedOrders.slice(0, 10));
  };

  // const toggleQuantity = (index) => {
  //   setShowQuantity((prev) => ({
  //     ...prev,
  //     [index]: !prev[index],
  //   }));
  // };

  return (
    <div className="bg-white shadow-md hover:shadow-lg rounded-md">
      <RstHeadingCard
        title="Recent Orders"
        icon={<BiMenu className="text-2xl text-red1 font-semibold " />}
        link={"/orders"}
      />

      <div className="overflow-x-auto scrollbar-custom">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-100 text-[.7rem] md:text-[.9rem] ">
              <th className="py-2 px-4  flex justify-center items-center   md:pt-3">
                <button
                  onClick={() => handleSort("id")}
                  className="flex items-center  gap-2"
                >
                  Order ID
                  <div>
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "id" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "id" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="py-2 px-4  md:table-cell lg:table-cell">
                <button
                  onClick={() => handleclient("client")}
                  className="flex items-center gap-2"
                >
                  Client
                  <div>
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "client" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "client" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="py-2 px-4  md:table-cell lg:table-cell">
                <button
                  onClick={() => handleordertype("ordertype")}
                  className="flex items-center gap-2"
                >
                  Order Type
                  <div>
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "ordertype" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "ordertype" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="py-2 px-4  md:table-cell lg:table-cell">
                <button
                  onClick={() => handletotalamount("totalamount")}
                  className="flex items-center gap-2"
                >
                  Total Amount
                  <div>
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "totalamount" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "totalamount" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="py-2 px-4  md:table-cell lg:table-cell">
                <button
                  onClick={() => handlequantity("quantity")}
                  className="flex items-center gap-2"
                >
                  Quantity
                  <div>
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "quantity" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "quantity" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="py-2 px-4  md:table-cell lg:table-cell">
                <button
                  onClick={() => handleorderdate("orderdate")}
                  className="flex items-center gap-2"
                >
                  Order Date
                  <div>
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "orderdate" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "orderdate" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="py-2 px-4  md:table-cell lg:table-cell">
                <button
                  onClick={() => handleorderstatus("orderstatus")}
                  className="flex items-center gap-2"
                >
                  Order Status
                  <div>
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "orderstatus" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "orderstatus" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 scrollbar-custom">
            {Orders.map((order, index) => (
              <React.Fragment key={index}>
                <tr className="border-b border-gray-300 ">
                  <td className="px-4 py-2 text-red1 hover:text-black  md:table-cell lg:table-cell truncate">
                    {order.orderid}
                  </td>
                  <td className="px-4 py-2 text-red1 hover:text-black  md:table-cell lg:table-cell truncate">
                    {order.client}
                  </td>
                  <td className="px-4 py-2 text-red1 hover:text-black  md:table-cell lg:table-cell truncate">
                    {order.ordertype}
                  </td>
                  <td className="px-4 py-2 text-red1 hover:text-black  md:table-cell lg:table-cell truncate">
                    {order.totalamount}
                    <td className="text-gray-400 text-sm ">No Record Found </td>
                  </td>
                  <td className="px-4 py-2 text-red1 hover:text-black  md:table-cell lg:table-cell truncate">
                    {order.quantity}
                  </td>
                  <td className="px-4 py-2 text-red1 hover:text-black  md:table-cell lg:table-cell truncate">
                    {order.orderdate}
                  </td>
                  <td className="px-4 py-2 text-red1 hover:text-black  md:table-cell lg:table-cell truncate">
                    {order.orderstatus}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <DataTableInfo entries={0} totalentries={0} />
    </div>
  );
};

export default RstRecentOrder;
