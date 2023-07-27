import Lazyload from "../comments/components/Lazyload";
import { useRoutes } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";

export const LoginPage = Lazyload(() => import("../pages/Login"));
export const ManagerPage = Lazyload(() => import("../pages/Manager"));
export const IndexPage = Lazyload(() => import("../pages/Home"));

export const modules = [
  {
    path: "user",
    name: "用户模块",
  },
  {
    path: "video",
    name: "视频模块",
  },
  {
    path: "order",
    name: "订单模块",
  },
  {
    path: "product",
    name: "课程模块",
    children: [
      {
        path: "list",
        name: "课程管理",
      },
      {
        path: "add",
        name: "添加课程",
      },
    ],
  },
];

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  auth: boolean;
  children?: RouteConfig[];
  redirect?: string;
}

const routes = [
  {
    path: "/",
    element: (
      // <RequireAuth>
        <IndexPage />
      // </RequireAuth>
    ),
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "manager",
    element: (
      // <RequireAuth>
        <ManagerPage />
      // </RequireAuth>
    ),
    children: modules,
  },
];

export const GetRoutes = () => useRoutes(routes);
