const list = [
  { title: "新版java零基础到高级教程小白自学编程", ratio: "22%" },
  { title: "新版java零基础到高级教程小白自学编程", ratio: "22%" },
  { title: "新版java零基础到高级教程小白自学编程", ratio: "22%" },
  { title: "新版java零基础到高级教程小白自学编程", ratio: "22%" },
  { title: "新版java零基础到高级教程小白自学编程", ratio: "22%" },
  { title: "新版java零基础到高级教程小白自学编程", ratio: "22%" },
  { title: "新版java零基础到高级教程小白自学编程", ratio: "22%" },
];
const TopPurchase = () => {
  return (
    <div className="h-[19.5rem] w-96 flex flex-col bg-top-purchase bg-no-repeat bg-center bg-cover">
      <div className="px-8 pt-4 text-[#17caf0] font-bold">近期销售占比</div>
      <div className="px-[1.375rem] mt-3">
        {list?.map((item, index) => (
          <div className="flex pt-1 pb-1" key={index}>
            <span className="text-[#00ffc3]">{index + 1}</span>
            <span className="text-white px-1">{item.title}</span>
            <span className="text-[#1dc2ff]">{item.ratio}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPurchase;
