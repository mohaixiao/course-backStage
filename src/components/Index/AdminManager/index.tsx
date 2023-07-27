import { Link } from "react-router-dom";
import Icon from "../../../assets/images/backstage_manager_icon.png";

const AdminManager = () => (
  <div className="relative z-10">
    <Link to="/manager">
      <div className="absolute top-20 left-10 cursor-pointer flex items-center justify-center ">
        <img src={Icon} className="w-5 h-5" alt="icon" />
        <span className="text-blue-400 font-bold pl-3">后台管理</span>
      </div>
    </Link>
  </div>
);

export default AdminManager;
