import { useNavigate } from "react-router-dom";
import githubIcon from "../../assets/mark-github.svg";

const Gnb = () => {
  const navigate = useNavigate();

  // 로컬 스토리지에 저장된 토큰 삭제
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div className="flex justify-between px-5 py-4 border-b-2 border-border_disabled drop-shadow-sm text-text_default">
      <div className="flex items-center space-x-2">
        <a href="https://github.com/hyrmzz1/auth-todo.git" target="_blank">
          <img src={githubIcon} alt="github logo" className="w-7 h-7"></img>
        </a>
        <p className="font-bold text-[1.75rem]">AUTH TODO</p>
      </div>
      <div className="flex items-center space-x-2">
        <p className="font-semibold">
          {/* TODO) 'email'에 사용자의 email 위치시키기 */}
          환영합니다, email님!
        </p>
        <button
          onClick={handleLogout}
          className="flex items-center px-3 py-2 h-[2.5rem] rounded-full border-2 border-border_defalut hover:bg-Bg_deep"
        >
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default Gnb;
