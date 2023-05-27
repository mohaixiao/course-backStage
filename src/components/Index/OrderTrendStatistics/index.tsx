import ReactECharts from "echarts-for-react";

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const OrderTrendStatistics = () => {
  const option = {
    title: {
      text: "订单量趋势统计",
      textStyle: {
        color: "#17caf0",
      },
      left: "10%",
      top: "5%",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["订单量趋势统计"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: months.map((item) => `${item}月`),
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "订单量",
        type: "line",
        data: [10, 22, 33, 44, 55, 66, 77, 88, 99, 100, 111, 122],
        symbolSize: 8,
        lineStyle: {
          color: "#2ce293",
          width: 3,
        },
        itemStyle: {
          color: "#2ce293",
          borderColor: "#2ce293",
          borderWidth: 5,
        },
        emphasis: {
          scale: 1.5,
        },
      },
    ],
  };

  return (
    <div className="h-[15.25rem] w-96 flex flex-col bg-order-trend-statistics bg-no-repeat bg-center bg-cover">
      <ReactECharts option={option} style={{ height: 300 }} />
    </div>
  );
};

export default OrderTrendStatistics;
