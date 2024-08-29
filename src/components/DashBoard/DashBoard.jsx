import { Link } from "react-router-dom";
import { cardData, cardData2 } from "../../Utils/data";
import CardBox from "./Card/CardBox";
import StatusCard from "./Card/StatusCard";
import StatisticGraph from "./Card/StatisticGraph";

const DashBoard = () => {
  return (
    <div className="w-full">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  mt-2">
        {cardData.map((card, index) => (
          <Link to={card.link} key={index}>
            <CardBox title={card.title} value={card.value} icon={card.icon} />
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5 py-5 ">
        {cardData2.map((card, index) => (
          <Link to="/orders" key={index}>
            <StatusCard
              title={card.title}
              value={card.value}
              icon={card.icon}
            />
          </Link>
        ))}
      </div>
      <StatisticGraph />
    </div>
  );
};

export default DashBoard;
