import { Link } from "react-router-dom";
import AuthBtn from "../components/ui/AuthBtn";
import AuthInput from "../components/ui/AuthInput";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 my-6"
      >
        <AuthInput
          type="email"
          placeholder="이메일"
          aria-invalid={
            isSubmitted ? (errors.email ? "true" : "false") : undefined
          }
          isError={!!errors.email}
          errorMessage={errors.email?.message?.toString() || ""}
          {...register("email", {
            required: "이메일을 입력해주세요", // `required: { value: true, message: "이메일을 입력해주세요" },` 와 같다.
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        <AuthInput
          type="password"
          placeholder="비밀번호"
          aria-invalid={
            isSubmitted ? (errors.password ? "true" : "false") : undefined
          }
          isError={!!errors.password}
          errorMessage={errors.password?.message?.toString() || ""}
          {...register("password", {
            required: "비밀번호를 입력해주세요",
            minLength: { value: 8, message: "비밀번호는 8자 이상입니다." },
          })}
        />
        <AuthBtn text="로그인" disabled={isSubmitting} />
      </form>

      <div className="flex justify-center text-sm text-text_sub">
        <span>아직 계정이 없다면</span>
        <Link to="/auth/signup" className="font-bold ml-1">
          회원가입
        </Link>
      </div>
    </>
  );
};

export default Login;
