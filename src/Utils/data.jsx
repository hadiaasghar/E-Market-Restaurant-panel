import { FaHome, FaBook, FaWallet, FaShoppingCart, FaUtensils } from "react-icons/fa";
import { RiHomeGearFill, RiMoneyDollarBoxLine } from "react-icons/ri";
import {
  FaRegCheckCircle,
  FaRegClipboard,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { IoCheckmarkCircleSharp, IoCloseOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdLocalCarWash } from "react-icons/md";


export const sidebarItems = [
  { title: "Dashboard", icon: <FaHome />, path: "/" }, // 1. Dashboard
  { title: "Documents", icon: <RiHomeGearFill />, path: "/documents" }, // 2. God's Eye
  {
    title: (
      <span>
        {" "}
        Books Table / DINE <br /> IN History
      </span>
    ),
    icon: <FaBook />,
    path: "/booktable",
  }, // 3. Zone
  {
    title: "Wallet Transactions",
    icon: <FaWallet />,
    path: "/wallet-trasections",
  }, // 4. Wallet Transactions
];

export   const cardData = [
  {
    title: "Total Earnings",
    value: "$0",
    link: "/restaurants/payouts",
    icon: (
      <RiMoneyDollarBoxLine
        size={40}
        className="text-white bg-primary-900 p-1 font-bold rounded"
      />
    ),
  },

  {
    title: "Total Orders",
    value: "0",
    link: "/orders",
    icon: (
      <FaShoppingCart
        size={40}
        className="text-white bg-primary-900 p-1 font-bold rounded"
      />
    ),
  },
  {
    title: "Total Foods",
    value: "0",
    link: "/food",
    icon: (
      <FaUtensils
        size={40}
        className="text-white bg-primary-900 p-1 font-bold rounded"
      />
    ),
  },
];


//StatusCard---------------------------
export const cardData2 = [
  {
    title: "Order Placed",
    value: "56",
    icon: <FaComputer size={24} className="text-primary-900" />,
    link: "orders",
  },
  {
    title: "Order Confirmed",
    value: "8",
    icon: <IoCheckmarkCircleSharp size={24} className="text-primary-900" />,
    link: "orders",
  },
  {
    title: "Order Shipped",
    value: "2",
    icon: <FaRegClipboard size={24} className="text-primary-900" />,
    link: "orders",
  },
  {
    title: "Order Completed",
    value: "18",
    icon: <FaRegCheckCircle size={24} className="text-primary-900" />,
    link: "orders",
  },
  {
    title: "Order Canceled",
    value: "3",
    icon: <IoCloseOutline size={24} className="text-primary-900" />,
    link: "orders",
  },
  {
    title: "Delivery Failed",
    value: "0",
    icon: (
      <AiOutlineExclamationCircle size={24} className="text-primary-900" />
    ),
    link: "orders",
  },
  {
    title: "Waiting for driver",
    value: "2",
    icon: <MdLocalCarWash size={24} className="text-primary-900" />,
    link: "orders",
  },
];