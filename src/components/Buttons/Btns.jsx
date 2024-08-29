import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { TiPlus } from "react-icons/ti";

const Btns = ({ btn1, btn2, link1, link2 }) => {
  return (
    <div className=" flex justify-between px-4">
      <Link to={link1} className="flex gap-2 items-center bg-primary-900 text-white py-2 px-4 rounded">
        <AiOutlineBars />
        {btn1}
      </Link>
      <Link to={link2} className="flex gap-2 bg-primary-900 items-center text-white py-2 px-4 rounded">
        <TiPlus />
        {btn2}
      </Link>
    </div>
  );
};

Btns.propTypes = {
  btn1: PropTypes.string.isRequired,
  btn2: PropTypes.string.isRequired,
  link1: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired,
};

export default Btns;
