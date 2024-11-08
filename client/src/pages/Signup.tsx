import { Link, useNavigate } from "react-router-dom";
import AuthBtn from "../components/ui/AuthBtn";
import AuthInput from "../components/ui/AuthInput";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { UserInput } from "../types/user";
import instance from "../api/instance";
import { AxiosError } from "axios";

type SignupInput = UserInput & { passwordConfirm: string };

const Signup = () => {
  const navigate = useNavigate();

  const onSubmit = async (data: SignupInput) => {
    try {
      const response = await instance.post("users/create", {
        email: data.email,
        password: data.password,
      });

      if (response.status === 200) {
        alert("회원가입 성공! 로그인 후 서비스를 이용해 주세요.");
        navigate("/auth/login");
      }
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        // 서버에서 보낸 에러 메세지
        if (axiosError.response.status === 409) {
          alert(
            "이미 사용 중인 이메일입니다. 다른 이메일을 입력하거나 로그인하세요."
          );
        } else {
          const errorMessage = (axiosError.response.data as { message: string })
            .message;
          alert(`오류 발생! ${errorMessage}`);
        }
      } else {
        // 네트워크 오류 또는 예기치 않은 오류
        alert("회원가입 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      }
    }
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
    watch,
    trigger,
  } = useForm<SignupInput>();
  const currPassword = watch("password");

  useEffect(() => {
    if (isSubmitted) {
      trigger("passwordConfirm"); // passwordConfirm 필드의 유효성 검사 다시 실행
    }
  }, [currPassword, trigger]);

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
            required: "이메일을 입력해주세요.",
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
            required: "비밀번호를 입력해주세요.",
            minLength: { value: 8, message: "비밀번호는 8자 이상입니다." },
          })}
        />
        <AuthInput
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
        <AuthBtn text="회원가입" disabled={isSubmitting} />
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
