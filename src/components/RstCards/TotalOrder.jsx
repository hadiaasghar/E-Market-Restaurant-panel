import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import DataTableInfo from "./DataTableInfo";
import RstHeadingCard from "./RstHeadingCard";
import CardHeader from "./CardHeader";
import HeadingCard from "./HeadingCard";
import FIleHeader from "./FIleHeader";
const initialRoles = [
  {
    selectrole: "",
    orderid: "",
    client: "",
    amount: "",
    ordertype: "",
    date: "",
    action: "",
    driver: "",
    status: "",
  },

  // Add more role objects here...
];

const TotalOrder = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRoles, setSelectedRoles] = useState(new Set());
  const rolesPerPage = 5;

  const handleSort = (column) => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn(column);
  };
  const handleclient = (column) => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn(column);
  };

  const handledate = (column) => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn(column);
  };

  const handleStatus = (column) => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn(column);
  };

  const handleDriver = (column) => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn(column);
  };

  const handleordertype = (column) => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn(column);
  };
  const handleamount = (column) => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn(column);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const newSelectedRoles = new Set(roles.map((_, index) => index));
      setSelectedRoles(newSelectedRoles);
    } else {
      setSelectedRoles(new Set());
    }
  };

  // const handleRoleSelection = (index) => {
  //   const newSelectedRoles = new Set(selectedRoles);
  //   if (newSelectedRoles.has(index)) {
  //     newSelectedRoles.delete(index);
  //   } else {
  //     newSelectedRoles.add(index);
  //   }
  //   setSelectedRoles(newSelectedRoles);
  // };

  const startIndex = currentPage * rolesPerPage;
  const displayedRoles = roles.slice(startIndex, startIndex + rolesPerPage);

  return (
    <>
      <FIleHeader
        heading={"Orders"}
        firsttile={"DashBoard"}
        firstlink={"/"}
        secontitle={"Orders"}
      />
      <div className="mx-5 my-3 shadow-md hover:shadow-lg ">
        {/* <CardHeader
        createmenu={"Create Restaurant PayOut"}
        listmenu={"Restaurant PayOut List"}
        createlink={"/create"}
      /> */}
        <HeadingCard />
        <div className="overflow-x-auto scrollbar-custom">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="text-[.6rem] md:text-[.9rem]">
                <th className="px-4 py-2 border bg-[#F8FAFD]">
                  <div className="flex items-center justify-center gap-1 ">
                    <input
                      type="checkbox"
                      className="bg-slate-600 h-4 w-4 "
                      onChange={handleSelectAll}
                      checked={
                        displayedRoles.length > 0 &&
                        displayedRoles.every((_, index) =>
                          selectedRoles.has(startIndex + index)
                        )
                      }
                    />
                    <FaTrashAlt className="text-red1" />
                    <span className="font-bold">All</span>
                  </div>
                </th>

                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={() => handleSort("orderid")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1> Order ID </h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "orderid" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "orderid" && sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={() => handleclient("client")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1> Client </h1>
                    <div className="flex flex-col">
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
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={() => handleDriver("driver")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1> Driver </h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "driver" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "driver" && sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={() => handleStatus("status")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1> Order Status </h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "status" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "status" && sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={() => handleamount("amount")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1> Amount </h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "amount" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "amount" && sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={() => handleordertype("ordertype")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1> Order Type </h1>
                    <div className="flex flex-col">
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
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={() => handledate("date")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1> Date </h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "date" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "date" && sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>

                <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 scrollbar-custom">
              {displayedRoles.length === 0 ? (
                <tr>
                  <td className="px-4 py-2 text-center">
                    <h1>No Record Found</h1>
                  </td>
                </tr>
              ) : (
                displayedRoles.map((role, index) => (
                  <tr key={index} className="hover:bg-gray-200">
                    <td className="px-4 py-2  w-10 text-center">
                      {role.selectrole}
                    </td>
                    <td className="px-4 py-2  text-left text-gray-400 text-sm ">
                      {role.orderid}
                    </td>
                    <td className="px-4 py-2  text-left text-gray-400 text-sm ">
                      {role.client}
                    </td>
                    <td className="px-4 py-2  text-left text-gray-400 text-sm ">
                      {role.amount}
                      No Record Found
                    </td>

                    <td className="px-4 py-2  text-left text-gray-400 text-sm ">
                      {role.ordertype}
                    </td>
                    <td className="px-4 py-2  text-left text-gray-400 text-sm ">
                      {role.date}
                    </td>

                    <td className="px-4 py-2  text-left flex gap-2">
                      {role.action}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <DataTableInfo entries={roles.length} totalentries={roles.length} />
      </div>
    </>
  );
};

export default TotalOrder;
