import React from "react";
import { IoMenuSharp } from "react-icons/io5";

const MainCard = ({ title }) => {
  return (
    <div className="">
      <div className=" flex items-center  justify-between bg-[#F7F7F7] px-6  py-3">
        <h1 className="text-xl font-semibold">{title}</h1>
        <button>
          {" "}
          <IoMenuSharp className="text-red1 font-bold text-xl" />
        </button>
      </div>
      <div className="border border-b border-gray-200 "></div>
      <div className="">
        <div className="flex flex-col lg:flex-row md:flex-row lg:items-center lg:justify-between md:justify-between gap-1 px-4  pt-4 pb-2">
          <h1 className="text-gray-400 ">Show</h1>
          <select
            name=""
            id=""
            className="p-1 border rounded-md border-gray-500 focus:border-b-4 focus:border-b-red-500 focus:ring-0"
          >
            <option value="">10</option>
            <option value="">25</option>
            <option value="">50</option>
            <option value="">100</option>
          </select>
          <h1 className="text-gray-400">entries</h1>
          <h1 className="text-gray-400  text-center lg:text-start">Search:</h1>
          <input
            type="text"
            className="p-1 border rounded border-gray-500 focus:border-b-4 focus:border-b-red-500 focus:ring-0"
          />
        </div>

        {/* <div className="border border-b border-gray-400 mx-4"></div>
        <div className="flex items-center justify-between px-6  py-3">
          <h1>
            Showing {entries1} to {entries2} of {entries} entries
          </h1>
          <div className="flex items-center gap-3">
            <h1>Previous</h1>
            <button className="text-white bg-black px-2 py-1 rounded">
              1
            </button>
            <h1>Next</h1>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainCard;
