import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TodoLayout from "./components/layout/TodoLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
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
      path: "/",
      element: <TodoLayout />,
      // children: [
      //   {
      //     path: "",
      //     element: ,
      //   },
      // ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
