import { Outlet } from "react-router-dom";

const TodoLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default TodoLayout;
