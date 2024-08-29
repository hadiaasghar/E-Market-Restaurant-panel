import React, { useState } from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import DataTableInfo from "../../components/RstCards/DataTableInfo";
import FIleHeader from "../../components/RstCards/FIleHeader";

const WalletTransecation = () => {
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
    <>
      <FIleHeader
        heading={"Wallet Transactions"}
        firstlink={"/"}
        firsttile={"DashBoard"}
        secontitle={"Wallet Transactions"}
      />
      <div className="bg-white shadow-md hover:shadow-lg rounded">
        <div className="flex flex-wrap justify-center gap-2 bg-[#F7F7F7] px-4 py-2 rounded ">
          <button className="bg-primary-900 text-white py-2 px-3 md:px-4 lg:px-4 rounded flex items-center gap-2">
            <TfiMenuAlt />
            Wallet Transaction List
          </button>
        </div>
        <div className="border border-b border-gray-200">
          <div className="px-4 py-4">
            <div className="flex flex-col lg:flex-row md:flex-row lg:items-center md:justify-between gap-2">
              <div className="flex items-center gap-2">
                <h1 className="text-gray-400">Show</h1>
                <select
                  name="entries"
                  id="entries"
                  className="p-1 border rounded-md border-gray-500 focus:border-b-4 focus:border-b-primary-900 focus:ring-0"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <h1 className="text-gray-400">entries</h1>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row items-center gap-2 mt-2 lg:mt-0">
                <h1 className="text-gray-400 text-center lg:text-start">
                  Search:
                </h1>
                <input
                  type="text"
                  className="p-1 border rounded border-gray-500 focus:border-b-4 focus:border-b-primary-900 focus:ring-0"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-custom">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-100 text-sm ">
                <th className="py-2 px-4  flex justify-center items-center   md:pt-3">
                  <button
                    onClick={() => handleSort("id")}
                    className="flex items-center  gap-2"
                  >
                    Amount
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
                    Date
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
                    Payment
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
                    Method
                    <div>
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "totalamount" &&
                          sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "totalamount" &&
                          sortDirection === "desc"
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
                    Note
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
                    Payment
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
                    Status
                    <div>
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "orderstatus" &&
                          sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "orderstatus" &&
                          sortDirection === "desc"
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
              {Orders.length === 0 ? (
                <tr>
                  <td className="px-4 py-2 text-center">
                    <h1>No Record Found</h1>
                  </td>
                </tr>
              ) : (
                Orders.map((order, index) => (
                  <React.Fragment key={index}>
                    <tr className="border-b border-gray-300 ">
                      <td className="px-4 py-2 text-primary-900 hover:text-black  md:table-cell lg:table-cell truncate">
                        {order.orderid}
                      </td>
                      <td className="px-4 py-2 text-primary-900 hover:text-black  md:table-cell lg:table-cell truncate">
                        {order.client}
                      </td>
                      <td className="px-4 py-2 text-primary-900 hover:text-black  md:table-cell lg:table-cell truncate">
                        {order.ordertype}
                      </td>
                      <td className="px-4 py-2 text-primary-900 hover:text-black  md:table-cell lg:table-cell truncate">
                        {order.totalamount}
                        <td className="text-gray-400 text-sm ">
                          No Record Found{" "}
                        </td>
                      </td>
                      <td className="px-4 py-2 text-primary-900 hover:text-black  md:table-cell lg:table-cell truncate">
                        {order.quantity}
                      </td>
                      <td className="px-4 py-2 text-primary-900 hover:text-black  md:table-cell lg:table-cell truncate">
                        {order.orderdate}
                      </td>
                      <td className="px-4 py-2 text-primary-900 hover:text-black  md:table-cell lg:table-cell truncate">
                        {order.orderstatus}
                      </td>
                    </tr>
                  </React.Fragment>
                ))
              )}
            </tbody>
          </table>
        </div>
        <DataTableInfo entries={0} totalentries={0} />
      </div>
    </>
  );
};

export default WalletTransecation;
