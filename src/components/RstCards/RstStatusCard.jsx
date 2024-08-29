import React from "react";

const RstStatusCard = ({ title, value, icon }) => {
  return (
    <div className="bg-[#F8F9FB] h-18 shadow-md rounded-lg p-3 flex items-center gap-3">
      <div className="">{icon}</div>

      <h3 className="text-gray-500 text-sm font-semibold">{title}</h3>
      <div>
        <p className="text-xl font-bold text-red1">{value}</p>
      </div>
    </div>
  );
};

export default RstStatusCard;
