import React, { useState } from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import TitleHead from "../Header/TitleHead";
import ButtonHead from "../Header/ButtonHead";
import HeadingCard from "../RstCards/HeadingCard";
import DataTableInfo from "../RstCards/DataTableInfo";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
const orderdata = [
  {
    selectrole: "Admin",
    orderid: "12345",
    client: "John Doe",
    amount: "$100",
    ordertype: "Online",
    date: "2023-10-01",
    // action: "View",
  },
  {
    selectrole: "User",
    orderid: "12346",
    client: "Jane Smith",
    amount: "$150",
    ordertype: "In-Store",
    date: "2023-10-02",
    // action: "Edit",
  },
  // Add more role objects here...
];

const RestaurantsPayout = () => {
  const [roles, setRoles] = useState(orderdata);
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
  const startIndex = currentPage * rolesPerPage;
  const displayedRoles = roles.slice(startIndex, startIndex + rolesPerPage);

  return (
    <>
      <TitleHead title="Restaurants Payouts" desc="Restaurants Payouts" />

      <div className=" ">
        <ButtonHead tab1={"Restaurant PayOut List"} tab2={"Create Restaurant PayOut"} link={"/payout/create"} />
        <HeadingCard />
        <div className="overflow-x-auto scrollbar-custom ">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
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
                        className={`transition-colors text-[.5rem] ${sortColumn === "orderid" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                          }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${sortColumn === "orderid" && sortDirection === "desc"
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
                        className={`transition-colors text-[.5rem] ${sortColumn === "client" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                          }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${sortColumn === "client" && sortDirection === "desc"
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
                        className={`transition-colors text-[.5rem] ${sortColumn === "amount" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                          }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${sortColumn === "amount" && sortDirection === "desc"
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
                        className={`transition-colors text-[.5rem] ${sortColumn === "ordertype" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                          }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${sortColumn === "ordertype" && sortDirection === "desc"
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
                        className={`transition-colors text-[.5rem] ${sortColumn === "date" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                          }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${sortColumn === "date" && sortDirection === "desc"
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
            <tbody>
              {displayedRoles.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-4 py-2 text-center text-gray-400">
                    No Data Found
                  </td>
                </tr>
              ) : (
                displayedRoles.map((role, index) => (
                  <tr key={index} className="hover:bg-gray-200">
                    <td className="px-4 py-2 w-10 text-center">
                      {role.selectrole}
                    </td>
                    <td className="px-4 py-2 text-left text-gray-400 text-sm">
                      {role.orderid}
                    </td>
                    <td className="px-4 py-2 text-left text-gray-400 text-sm">
                      {role.client}
                    </td>
                    <td className="px-4 py-2 text-left text-gray-400 text-sm">
                      {role.amount}
                    </td>
                    <td className="px-4 py-2 text-left text-gray-400 text-sm">
                      {role.ordertype}
                    </td>
                    <td className="px-4 py-2 text-left text-gray-400 text-sm">
                      {role.date}
                    </td>
                    <td className="px-4 py-2 text-white text-left flex gap-2">
                      {role.action}
                      <Link to="/payout/edit">
                        <MdModeEdit className="rounded-full bg-green-400 text-4xl p-1" />
                      </Link>
                      <Link to="/payout/view">
                        <FaEye className="rounded-full bg-primary-400 text-4xl p-2" />
                      </Link>
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

export default RestaurantsPayout;
