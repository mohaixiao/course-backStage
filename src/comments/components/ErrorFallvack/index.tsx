import { Result } from "antd";

export default function ErrorFallback() {
  return <Result status="500" title="抱歉，网页出错，请联系开发人员" />;
}
