import { Link } from "react-router-dom";
import UserBtn from "../components/ui/UserBtn";
import UserInput from "../components/ui/UserInput";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
    watch,
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const currPassword = watch("password");

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 my-6"
      >
        <UserInput
          type="email"
          placeholder="이메일"
          aria-invalid={
            isSubmitted ? (errors.email ? "true" : "false") : undefined
          }
          isError={!!errors.email}
          errorMessage={errors.email?.message?.toString() || ""}
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        <UserInput
          type="password"
          placeholder="비밀번호"
          aria-invalid={
            isSubmitted ? (errors.password ? "true" : "false") : undefined
          }
          isError={!!errors.password}
          errorMessage={errors.password?.message?.toString() || ""}
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: { value: 8, message: "비밀번호는 8자 이상입니다." },
          })}
        />
        <UserInput
          type="password"
          placeholder="비밀번호 확인"
          aria-invalid={
            isSubmitted
              ? errors.passwordConfirm
                ? "true"
                : "false"
              : undefined
          }
          isError={!!errors.passwordConfirm}
          errorMessage={errors.passwordConfirm?.message?.toString() || ""}
          {...register("passwordConfirm", {
            required: "비밀번호를 입력해주세요.",
            validate: (value) =>
              value === currPassword || "비밀번호가 일치하지 않습니다.",
          })}
        />
        <UserBtn text="회원가입" disabled={isSubmitting} />
      </form>

      <div className="flex justify-center text-sm text-text_sub">
        <span>이미 계정이 있다면</span>
        <Link to="/auth/login" className="font-bold ml-1">
          로그인
        </Link>
      </div>
    </>
  );
};

export default Signup;
