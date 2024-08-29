import { Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const RstStatisticGraph = () => {
  const totalSalesData = {
    labels: ["JAN", "MAR", "MAY", "JUL", "SEP", "DEC"],

    datasets: [
      {
        label: "This year",
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "#06b6d4",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 1500,
        ticks: {
          stepSize: 500,

          callback: function (value) {
            return `$${value.toLocaleString()}.00`; //
          },
        },
      },
    },
    plugins: {
      datalabels: {
        formatter: (value) => `$${value.toLocaleString()}.00`,
      },
    },
  };

  const serviceOverviewData = {
    labels: ["Total Orders", "Total Foods"],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ["#B1DB6F", "#7360ED"],
      },
    ],
  };

  const salesOverviewData = {
    labels: ["Total Earnings"],
    datasets: [
      {
        data: [],
        backgroundColor: ["#f59e0b"],
      },
    ],
  };

  return (
    <div className="container  p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  h-90 ">
        <div className="bg-white shadow-md rounded-lg ">
          <h2 className="text-xl bg-[#F7F7F7] font-semibold  p-4">
            Total Sales
          </h2>
          <div className="px-2  h-64 w-full pt-5  ">
            <Bar data={totalSalesData} options={options} />
            <div>
              <h1 className="float-end pt-3 text-gray-500">
                <span className="bg-[#2EC7D9] rounded-md me-1 px-2"></span> This
                Year
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg">
          <h2 className="text-xl bg-[#F7F7F7] font-semibold mb-4 p-4">
            Service Overview
          </h2>
          <div className="h-64 w-full flex items-center justify-center mb-5">
            <Doughnut data={serviceOverviewData} />
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg ">
          <h2 className="text-xl bg-[#F7F7F7] font-semibold mb-4 p-4">
            Sales Overview
          </h2>
          <div className="h-64 w-full flex items-center justify-center ">
            <Doughnut data={salesOverviewData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RstStatisticGraph;
