import {
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorInfo } from "react";
import AppRouter from "./router/AppRouter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 윈도우가 다시 포커스되었을 때 데이터를 호출할 것인지
      throwOnError: true, // ErrorBoundary로 전달
    },
  },
});

const App = () => {
  const { reset } = useQueryErrorResetBoundary();

  const logError = (error: Error, info: ErrorInfo) => {
    console.error("Logged Error:", error, info);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        fallback={<div>Something went wrong</div>}
        onReset={reset}
        onError={logError}
      >
        <AppRouter />
      </ErrorBoundary>
      {import.meta.env.MODE === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
};

export default App;
