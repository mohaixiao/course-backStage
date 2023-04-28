import React, { useState } from "react";
import styles from "./style.module.css";
import { useAuth } from "../../hooks/auth";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log(phone, password);
    await login(phone, password);
  };

  return (
    <div
      className={`${styles.login} flex flex-col items-center justify-center relative h-screen w-screen bg-cover`}
    >
      {/* 蒙层 */}
      <div className="w-2/6 h-2/3 opacity-70 absolute bg-[#f2f2f2] rounded-md" />
      {/* 表單 */}
      <div className=" flex flex-col items-center justify-center z-10 w-1/3 h-1/2  pt-10 px-35">
        <h1 className={`${styles.title} font-bold text-xl text-#2580ec-600`}>
          欢迎登录
        </h1>
        <div className="flex  items-center justify-center">
          <UserOutlined className="pt-5 pr-3" />
          <input
            placeholder="请输入账号"
            className={styles.input}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-grow items-center justify-center">
          <LockOutlined className="pt-5 pr-3" />
          <input
            type="password"
            placeholder="请输入密码"
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-[#2580ec] w-1/2 h-1/6  hover:bg-[blue] text-base text-white ease-out duration-300 rounded-md"
          onClick={handleLogin}
        >
          登录
        </button>
      </div>
    </div>
  );
};

export default Login;
