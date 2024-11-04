import { Link } from "react-router-dom";
import UserBtn from "../components/ui/UserBtn";
import UserInput from "../components/ui/UserInput";

const Signup = () => {
  return (
    <>
      <form className="flex flex-col space-y-4 my-6">
        <UserInput type="email" name="email" placeholder="이메일" />
        <UserInput type="text" name="password" placeholder="비밀번호" />
        <UserInput type="text" name="password" placeholder="비밀번호 확인" />
        <UserBtn text="회원가입" />
      </form>

      <div className="flex justify-center text-[14px] text-text_sub">
        <span>이미 계정이 있다면</span>
        <Link to="/auth/login" className="font-bold ml-1">
          로그인
        </Link>
      </div>
    </>
  );
};

export default Signup;
