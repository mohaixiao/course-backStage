import React from "react";
import ReactECharts from "echarts-for-react";

const TypeDistribution = () => {
  const option = {
    title: {
      text: "终端类型分布",
      left: "10%",
      top:"10%",
      textStyle: {
        color: "#17caf0",
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      icon: "circle",
      orient: "vertical",
      left: "left",
      top: "50%",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "终端类型分布",
        type: "pie",
        radius: "50%",
        data: [
          {
            itemStyle: {
              color: "#4374ff",
            },
            value: 335,
            name: "Android",
          },
          {
            itemStyle: {
              color: "#2ce293",
            },
            value: 310,
            name: "iPhone",
          },
          {
            itemStyle: {
              color: "#17caf0",
            },
            value: 234,
            name: "PC",
          },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
    top:"30%"
  };

  return (
    <div className="h-[12.75rem] w-96 flex justify-center items-center flex-col bg-type-distribution bg-no-repeat bg-center bg-cover mb-8">
      <div className="w-full h-full mb-8">
        <ReactECharts
          option={option}
          style={{ height: 250 }}
          opts={{ renderer: "svg" }}
        />
      </div>
    </div>
  );
};

export default TypeDistribution;
