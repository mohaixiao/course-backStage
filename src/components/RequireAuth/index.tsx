import { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/auth"; // 引入验证上下文

interface RequireAuthProps {
  children: ReactElement;
}

export default function RequireAuth({ children }: RequireAuthProps) {
  let { isLogin } = useAuth(); // 获取验证对象
  let location = useLocation(); // 获取URL参数

  if (!isLogin) {
    // 未登入，使用Navigate组件重定向到登录页，传入state属性以保存当前URL位置信息
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children; // 验证通过，返回插槽内容，例如： ProtectedPage 页面(显示页面)
}
