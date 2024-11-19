import { Outlet } from "react-router-dom";
import Gnb from "./Gnb";

const TodoLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Gnb />
      <main className="flex-grow flex justify-center items-center bg-gray200">
        <div className="w-[30rem] p-6 rounded-lg bg-white shadow-md">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default TodoLayout;
