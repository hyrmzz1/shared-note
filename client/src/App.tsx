import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorInfo } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.state.data !== undefined) {
        // background error 발생 (캐시에 데이터가 있는 경우)
        toast.error(`Background update failed: ${error.message}`);
      } else {
        // 초기 데이터 로드 실패 (캐시에 데이터가 없는 경우)
        toast.error(`Failed to load data: ${error.message}`);
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => toast.error(`Mutation Error: ${error.message}`),
  }),
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
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      {import.meta.env.MODE === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
};

export default App;
