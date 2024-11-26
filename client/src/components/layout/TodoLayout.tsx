import { Outlet } from "react-router-dom";
import Gnb from "./Gnb";

const TodoLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Gnb />
      <main className="flex-grow flex justify-center items-center overflow-hidden bg-gray200">
        <Outlet />
      </main>
    </div>
  );
};

export default TodoLayout;
