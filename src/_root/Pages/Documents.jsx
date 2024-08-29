import { useState } from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { MdModeEdit } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import RstHeadingCard from "../../components/RstCards/RstHeadingCard";
import DataTableInfo from "../../components/RstCards/DataTableInfo";
import HeadingCard from "../../components/RstCards/HeadingCard";
import { Link } from "react-router-dom";
import FIleHeader from "../../components/RstCards/FIleHeader";
import TitleHead from "../../components/Header/TitleHead";

const initialRoles = [
  {
    documentfor: "User",

    name: "Foodtrator",
    publish: false,
  },
  {
    documentfor: "driver",

    name: "Food",
    publish: true,
  },
  {
    documentfor: "me",

    name: "Foodtrator",
    publish: false,
  },
  {
    documentfor: "driver",

    name: "Food",
    publish: true,
  },
  {
    documentfor: "driver",

    name: "Foodtrator",
    publish: false,
  },
  {
    documentfor: "driver",

    name: "Food",
    publish: true,
  },
  {
    documentfor: "driver",

    name: "Foodtrator",
    publish: false,
  },
  {
    documentfor: "driver",

    name: "Food",
    publish: true,
  },

  // Add more role objects here...
];

const Documents = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(0);
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

  const startIndex = currentPage * rolesPerPage;
  const displayedRoles = roles.slice(startIndex, startIndex + rolesPerPage);

  return (
    <>
      
      <TitleHead title="Documents" desc="Document" />
      <div className="">
        <div className="flex flex-wrap justify-center gap-2 bg-primary-10 px-4 py-2 mx-2 rounded-t-lg ">
          <button className="bg-primary-900 text-white py-2 px-3 md:px-4 lg:px-4 rounded flex items-center gap-2">
            <TfiMenuAlt />
            Document Details
          </button>
        </div>

        <div className="overflow-x-auto scrollbar-custom">
          <HeadingCard />
          <table className="min-w-full bg-white">
            <thead>
              <tr className="text-[.7rem] md:text-[.9rem]">
                <th className="px-4 py-2 border text-left">
                  <button
                    onClick={() => handleSort("name")}
                    className="flex items-center justify-between w-full gap-1"
                  >
                    <h1> Name </h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "name" && sortDirection === "asc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "name" && sortDirection === "desc"
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>

                <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                  Status
                </th>
                <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedRoles.map((role, index) => (
                <tr key={index} className="hover:bg-gray-200 ">
                  <td className="px-4 py-2 border text-left  text-primary-900 text-sm hover:text-black">
                    {role.name}
                  </td>
                  <td className="px-4 py-2 border   text-sm ">
                    <h1>
                      <span className="bg-[#FFC107] text-sm border rounded-md px-3 py-1">
                        {" "}
                        Pending
                      </span>
                    </h1>
                  </td>

                  <td className="px-4 py-2 border text-left flex gap-2">
                    <Link to={"/edit"}>
                      <MdModeEdit className="p-1 bg-primary-400 text-[1.8rem] rounded-full text-white" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <DataTableInfo entries={roles.length} totalentries={roles.length} />
      </div>
    </>
  );
};

export default Documents;
