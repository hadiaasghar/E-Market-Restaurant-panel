import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const RstHeadingCard = ({ title, icon, link }) => {
  return (
    <div className="border border-b border-gray-200">
      <div className=" flex items-center  justify-between bg-[#F7F7F7] px-6  py-3">
        <h1 className="text-xl font-semibold">{title}</h1>
        <Link to={link}> {icon}</Link>
      </div>
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
            <h1 className="text-gray-400 text-center lg:text-start">Search:</h1>
            <input
              type="text"
              className="p-1 border rounded border-gray-500 focus:border-b-4 focus:border-b-primary-900 focus:ring-0"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RstHeadingCard;
