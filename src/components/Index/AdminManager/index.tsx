import { Link } from "react-router-dom";
import Icon from "../../../assets/images/backstage_manager_icon.png";

const AdminManager = () => (
  <div className="z-10 ">
    <Link to="/manager">
      <div className="absolute left-10 cursor-pointer items-center flex">
        <img src={Icon} className="w-3 h-3 lg:w-5 lg:h-5" alt="icon" />
        <p className="text-blue-400 font-bold pl-3 lg:text-lg text-sm">后台管理</p>
      </div> 
    </Link>
  </div>
);

export default AdminManager;
