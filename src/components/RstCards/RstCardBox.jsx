import React from "react";

const RstCardBox = ({ title, value, icon }) => {
  return (
    <div className=" shadow-md rounded-lg flex flex-col gap-5  ">
      <div className="h-28">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-500 text-sm font-semibold px-5 py-2">
            {title}
          </h3>

          <div className="mr-4 text-red1">{icon}</div>
        </div>
        <p className="text-[1.2rem] font-bold text-gray-900 px-5 py-2">
          {value}
        </p>
      </div>
    </div>
  );
};

export default RstCardBox;
