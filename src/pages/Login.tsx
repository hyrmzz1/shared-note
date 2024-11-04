import { Link } from "react-router-dom";
import UserBtn from "../components/ui/UserBtn";
import UserInput from "../components/ui/UserInput";

const Login = () => {
  return (
    <>
      <form className="flex flex-col space-y-4 my-6">
        <UserInput type="email" name="email" placeholder="이메일" />
        <UserInput type="text" name="password" placeholder="비밀번호" />
        <UserBtn text="로그인" />
      </form>

      <div className="flex justify-center text-[14px] text-text_sub">
        <span>아직 계정이 없다면</span>
        <Link to="/auth/signup" className="font-bold ml-1">
          회원가입
        </Link>
      </div>
    </>
  );
};

export default Login;
