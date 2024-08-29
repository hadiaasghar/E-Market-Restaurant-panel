import React from "react";
import RstCardBox from "./RstCards/RstCardBox";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import {
  FaRegCheckCircle,
  FaRegClipboard,
  FaShoppingCart,
  FaUtensils,
} from "react-icons/fa";
import RstStatusCard from "./RstCards/RstStatusCard";
import { FaComputer } from "react-icons/fa6";
import { IoCheckmarkCircleSharp, IoCloseOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdLocalCarWash } from "react-icons/md";
import RstStatisticGraph from "./RstCards/RstStatisticGraph";
import RstRecentOrder from "./RstCards/RstRecentOrder";

const RstDashBoard = () => {
  //CardBox-----------------------
  const cardData = [
    {
      title: "Total Earnings",
      value: "$0",
      link: "/khan",
      icon: (
        <RiMoneyDollarBoxLine
          size={40}
          className="text-white bg-red1 p-1 font-bold rounded"
        />
      ),
    },

    {
      title: "Total Orders",
      value: "0",
      icon: (
        <FaShoppingCart
          size={40}
          className="text-white bg-red1 p-1 font-bold rounded"
        />
      ),
    },
    {
      title: "Total Foods",
      value: "0",
      icon: (
        <FaUtensils
          size={40}
          className="text-white bg-red1 p-1 font-bold rounded"
        />
      ),
    },
  ];
  //StatusCard---------------------------
  const cardData2 = [
    {
      title: "Order Placed",
      value: "56",
      icon: <FaComputer size={24} className="text-red1" />,
    },
    {
      title: "Order Confirmed",
      value: "8",
      icon: <IoCheckmarkCircleSharp size={24} className="text-red1" />,
    },
    {
      title: "Order Shipped",
      value: "2",
      icon: <FaRegClipboard size={24} className="text-red1" />,
    },
    {
      title: "Order Completed",
      value: "18",
      icon: <FaRegCheckCircle size={24} className="text-red1" />,
    },
    {
      title: "Order Canceled",
      value: "3",
      icon: <IoCloseOutline size={24} className="text-red1" />,
    },
    {
      title: "Delivery Failed",
      value: "0",
      icon: <AiOutlineExclamationCircle size={24} className="text-red1" />,
    },
    {
      title: "Waiting for driver",
      value: "2",
      icon: <MdLocalCarWash size={24} className="text-red1" />,
    },
  ];
  return (
    <div className="mx-3">
      {" "}
      <div className="px-5  bg-white shadow-md hover:shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold pt-5">Business Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mt-5">
          {cardData.map((card, index) => (
            <RstCardBox
              key={index}
              title={card.title}
              link={card.link}
              value={card.value}
              icon={card.icon}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  py-8 ">
          {cardData2.map((card, index) => (
            <RstStatusCard
              key={index}
              title={card.title}
              value={card.value}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
      {/* <RstStatisticGraph /> */}
      {/* <RstRecentOrder /> */}
    </div>
  );
};

export default RstDashBoard;
