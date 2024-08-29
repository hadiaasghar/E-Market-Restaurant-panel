
import RstCardBox from "../../components/RstCards/RstCardBox";
import RstStatusCard from "../../components/RstCards/RstStatusCard";
import RstStatisticGraph from "../../components/RstCards/RstStatisticGraph";
import RstRecentOrder from "../../components/RstCards/RstRecentOrder";
import { Link } from "react-router-dom";
import DashBoard from "../../components/DashBoard/DashBoard";

const DashboardPage = () => {
  //CardBox-----------------------

  
  return (
    <div className="">
      <div className="">
      <h1 className="text-2xl bg-gray-50 shadow-sm shadow-primary-200 rounded-t-lg font-semibold p-4">Business Analytics</h1>
      <div>
        <DashBoard/>
      </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mt-5">
          {cardData.map((card, index) => (
            <>
              <Link to={card.link}>
                <RstCardBox
                  key={index}
                  title={card.title}
                  value={card.value}
                  icon={card.icon}
                />
              </Link>
            </>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  py-8 ">
          {cardData2.map((card, index) => (
            <>
              <Link to={card.link}>
                <RstStatusCard
                  key={index}
                  title={card.title}
                  value={card.value}
                  icon={card.icon}
                />
              </Link>
            </>
          ))}
        </div> */}
      </div>
      <RstStatisticGraph />
      <RstRecentOrder />
    </div>
  );
};

export default DashboardPage;
