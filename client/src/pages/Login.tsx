import { Link, useNavigate } from "react-router-dom";
import AuthBtn from "../components/ui/AuthBtn";
import AuthInput from "../components/ui/AuthInput";
import { useForm } from "react-hook-form";
import { UserInput } from "../types/user";
import { AuthResponse } from "../types/auth";
import instance from "../api/instance";
import { AxiosError } from "axios";

const Login = () => {
  const navigator = useNavigate();

  const onSubmit = async (data: UserInput) => {
    try {
      const response = await instance.post<AuthResponse>("users/login", {
        email: data.email,
        password: data.password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);

      if (response.status === 200) {
        alert("로그인 성공! 환영합니다. 🎉");
        navigator("/");
      }
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        // 서버에서 보낸 에러 메세지
        if (axiosError.response.status === 400) {
          alert("해당 정보로 가입된 계정이 존재하지 않습니다.");
        } else {
          const errorMessage = (axiosError.response.data as { message: string })
            .message;
          alert(`오류 발생! ${errorMessage}`);
        }
      } else {
        // 네트워크 오류 또는 예기치 않은 오류
        alert("문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      }
    }
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm<UserInput>();

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
