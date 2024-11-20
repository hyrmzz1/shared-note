import { useForm } from "react-hook-form";
import { TodoInput } from "../../types/todos";
import instance from "../../api/instance";
import { useNavigate } from "react-router-dom";

const TodoForm = () => {
  const navigator = useNavigate();

  const onSubmit = async (data: TodoInput) => {
    const userToken = localStorage.getItem("token");
    if (!userToken) {
      alert("로그인 상태가 아닙니다. 다시 로그인해주세요.");
      navigator("/auth");
      return;
    }

    try {
      const response = await instance.post<TodoInput>(
        "/todos",
        {
          title: data.title,
          content: data.content,
        },
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );

      reset(); // 폼 초기화
    } catch (error) {
      // console.log("에러 발생:", error);
      alert("에러 발생! 다시 시도해주세요.");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
    reset,
  } = useForm<TodoInput>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6">
      <input
        type="text"
        placeholder="제목을 입력해주세요."
        {...register("title", { required: true })}
        aria-invalid={isSubmitted ? (errors.title ? true : false) : undefined}
        className={`appearance-none focus:outline-none border rounded-md w-full px-4 py-5 ${
          errors.title ? "border-red focus:border-red" : "focus:border-blue"
        }`}
      ></input>
      <input
        type="text"
        placeholder="내용을 입력해주세요."
        {...register("content", { required: true })}
        aria-invalid={isSubmitted ? (errors.content ? true : false) : undefined}
        className={`appearance-none focus:outline-none border rounded-md w-full px-4 py-5 ${
          errors.content ? "border-red focus:border-red" : "focus:border-blue"
        }`}
      ></input>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md px-4 py-5 focus:border-blue border"
      >
        추가하기
      </button>
    </form>
  );
};

export default TodoForm;
