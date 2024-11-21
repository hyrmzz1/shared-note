import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import PublicRoute from "./PublicRoute";
import AuthLayout from "../components/layout/AuthLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import TodoLayout from "../components/layout/TodoLayout";
import TodoApp from "../pages/TodoApp";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: (
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/todos",
    element: (
      <ProtectedRoute>
        <TodoLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: ":id", // 특정 Todo 상세 보기
        element: <TodoApp />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/todos" replace />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
