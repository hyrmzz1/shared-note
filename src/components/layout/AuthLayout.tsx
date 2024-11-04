import { Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const location = useLocation();
  const page = location.pathname.includes("login") ? "로그인" : "회원가입";

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gray200">
      <div className="w-[30rem] p-6 rounded-lg bg-white shadow-md">
        <p className="font-bold text-[2rem] text-center">AUTH TODO</p>
        <p className="font-semibold text-center">
          {page} 후 나만의 할일을 관리해보세요
        </p>
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
