import { Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const location = useLocation();
  const page = location.pathname.includes("login") ? "로그인" : "회원가입";

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gray200">
      <div className="w-[30rem] p-6 rounded-lg bg-white shadow-md">
        <div className="text-center space-y-1">
          <p className="font-bold text-[2rem]">AUTH TODO</p>
          <p className="font-semibold">
            {page} 후 나만의 TODO를 관리해 보세요! ✅
          </p>
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
