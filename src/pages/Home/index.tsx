import TodayCurrentData from "../../components/Index/TodayCurrentData";
import styles from "./style.module.css";
import FlowStat from "../..//components/Index/FlowStat";
import TypeDistribution from "../..//components/Index/TypeDistribution";
import TopWebsite from "../..//components/Index/TopWebsite";
import TopPurchase from "../..//components/Index/TopPurchase";
import UserTrendStatistics from "../..//components/Index/UserTrendStatistics";
import OrderTrendStatistics from "../..//components/Index/OrderTrendStatistics";
import AdminManager from "../..//components/Index/AdminManager";
import Map from "../..//components/Index/Map";
import headerImg from "../../assets/images/backgroud_head.png";
import backgroundImg from "../../assets/images/title_head.png";

function IndexPage() {
  return (
    <div className={`${styles.home}  flex flex-col  h-screen w-screen`}>
      {/* 头部图片  */}
      <AdminManager />
      <div className="flex items-center justify-center relative ">
        {/* 跳转管理页面  */}
        <img src={headerImg} alt="header" />
        <img
          src={backgroundImg}
          className="absolute bottom-17 w-1/4"
          alt="header1"
        />
      </div>
      <div className="flex h-1/2 justify-around mt-8 bg-white">
        <div className="flex flex-col v-center gap-4 h-full">
          {/* 今日实时数据  */}
          <TodayCurrentData />
          {/* 流量访问统计  */}
          <FlowStat />
          {/* 终端类型分布  */}
          <TypeDistribution />
        </div>
        <div className="flex  flex-col items-center justify-center mt-8 bg-white">
          {/* 地图  */}
          <Map />
          {/* TOP网站来源  */}
          <TopWebsite />
        </div>
        <div className="flex flex-col v-center shrink-0  h-full bg-white">
          {/* 近期销售占比  */}
          <TopPurchase />
          {/* 订单量趋势统计  */}
          <OrderTrendStatistics />
          {/* 用户趋势统计 */}
          <UserTrendStatistics />
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
