import React from "react";
import { Link } from "react-router-dom";

const FIleHeader = ({ heading, firstlink, firsttile, secontitle }) => {
  return (
    <div className=" mb-5 bg-[#FFFFFF] px-2 py-4  shadow-md  flex flex-col md:flex-row  md:justify-between items-center">
      <h1 className="text-2xl font-semibold">{heading}</h1>
      <div className="flex items-center gap-1">
        <Link to={firstlink} className=" text-red1">
          {firsttile}
        </Link>
        <p className=" text-gray-400">
          {">"} {secontitle}
        </p>
      </div>
    </div>
  );
};

export default FIleHeader;
