import { checkAdminRole, adminLogin } from "../api/user";
import { message } from "antd";
import { useLocalStorageState } from "ahooks";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  // token响应式设置本地存储
  const [token, setToken] = useLocalStorageState<string | undefined>("token", {
    defaultValue: "",
  });
  const isLogin = useMemo(() => !!token, [token]);
  const navigate = useNavigate();

  // 登录的方法
  async function login(phone: string, password: string) {
    // 调用登录接口
    const { code, data } = await adminLogin({ phone, password });

    if (code === 0) {
      setToken(data);
      // 获取用户信息
      const { data: details, code: c_code } = await checkAdminRole();
      if (c_code === 0) {
        if (details.role === "ADMIN") {
          message.success("登录成功");
          navigate("/");
        } else {
          message.error("您不是管理员, 无法登录!");
          clearLoginState();
        }
      }
    }
  }

  // 清除token
  function clearLoginState() {
    setToken("");
  }

  return {
    token,
    isLogin,
    login,
    clearLoginState,
  };
}
