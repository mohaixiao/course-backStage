const TodayCurrentData = () => {
  const list = [
    { price: "1000", title: "今日成交金额" },
    { price: "1000", title: "今日成交金额" },
    { price: "1000", title: "今日成交金额" },
    { price: "1000", title: "今日成交金额" },
  ];

  return (
    <div className="h-56 w-96 flex flex-col bg-center bg-cover bg-no-repeat bg-today-current-data">
      <div className="px-8 pt-4 text-blue-300 text-xl font-bold">
        今日实时数据
      </div>
      <div className="grid gap-4 grid-cols-2">
        {list.map((item) => (
          <div className="flex flex-col items-center justify-center">
            <span className="text-green-300 text-center text-3xl">
              {item.price}
            </span>
            <span className="text-base text-white text-center">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayCurrentData;
