import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallvack";

const Loading = () => <Spin size="large"></Spin>;

function Lazyload(loadComponent: any) {
  const LazyComponent = lazy(loadComponent);

  return (props: any) => (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
}

export default Lazyload;
