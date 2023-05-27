import React from "react";
import ReactECharts from "echarts-for-react";

const FlowStat: React.FC = () => {
  const option = {
    title: {
      text: "流量访问统计",
      textStyle: {
        fontSize: 16,
        color: "#17caf0",
        top: "20%",
      },
      padding: [
        20, // 上
        20, // 左
      ],
    },
    tooltip: {},
    legend: {
      data: ["浏览量（PV）", "访客数（UV）"],
      left:"40%",
      top:"5%",
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: {
      data: ["09/20", "09/21", "09/22", "09/23", "09/24", "09/25", "09/26"],
    },
    yAxis: {},
    // 柱状图数据，浏览量|访客数
    series: [
      {
        name: "浏览量（PV）",
        type: "bar",
        stack: "总量",
        barMaxWidth: 15,
        barGap: "10%",
        itemStyle: {
          color: "#3d6df7",
        },
        data: [18, 30, 60, 70, 20, 60, 10],
      },
      {
        name: "访客数（UV）",
        type: "bar",
        stack: "总量",
        itemStyle: {
          color: "#00dd8d",
        },
        data: [28, 34, 66, 80, 70, 40, 20],
      },
    ],
  };

  return (
    <div className="h-[22.5rem] w-[25rem] flex flex-col bg-no-repeat bg-center bg-cover bg-flow-start-border">
      <ReactECharts
        option={option}
        style={{ height: 400 }}
        opts={{ renderer: "svg" }}
      />
    </div>
  );
};

export default FlowStat;
