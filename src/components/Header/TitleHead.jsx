import React from "react";
import PorpsTypes from "prop-types";
import { Link } from "react-router-dom";
const TitleHead = ({ title, desc, link, desc2 }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 justify-between items-start md:items-center px-4 py-2 border-b border-primary-300 mb-5">
      <h1 className="text-[1.2rem] font-semibold">{title}</h1>
      <div className="flex">
        <Link to="/" className="text-[1rem] text-primary-900 px-2">
          {" "}
          Dashboard
        </Link>
        <Link to={link} className="text-primary-900 text-[1rem]">
          {desc2}
        </Link>
        <p className="text-gray-500 pl-2 text-[1rem]">
          {" > "}
          {desc}
        </p>
      </div>
    </div>
  );
};

TitleHead.propTypes = {
  title: PorpsTypes.string,
  desc: PorpsTypes.string,
  link: PorpsTypes.string,
  desc2: PorpsTypes.string,
};

export default TitleHead;
