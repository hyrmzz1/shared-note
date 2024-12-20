import { useNavigate } from "react-router-dom";
import GithubIcon from "../../assets/mark-github.svg?react";

const Gnb = () => {
  const navigate = useNavigate();

  // 로컬 스토리지에 저장된 토큰 삭제
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div className="flex justify-between px-5 py-4 border-b-2 border-border_disabled drop-shadow-sm">
      <div className="flex items-center space-x-2">
        <a
          href="https://github.com/hyrmzz1/auth-todo.git"
          target="_blank"
          aria-label="Go to Github repository"
          rel="noopener noreferrer author"
        >
          <GithubIcon className="w-7 h-7" />
          <span className="sr-only">Go to Github repository</span>
        </a>
        <p
          className="font-bold text-[1.5rem] cursor-pointer"
          onClick={() => navigate("/todos")}
        >
          Shared Note
        </p>
      </div>
      <button
        onClick={handleLogout}
        className="flex items-center px-3 rounded-full border-[.1094rem] border-border_defalut hover:bg-Bg_deep text-text_info"
      >
        로그아웃
      </button>
    </div>
  );
};

export default Gnb;
