import { useForm } from "react-hook-form";
import { TodoInput } from "../../types/todos";
import useTodoStore from "../../stores/useTodoStore";
import useTodoAppStore from "../../stores/useTodoAppStore";

const CreateTodoView = () => {
  // const { addTodo } = useTodoStore(); // selector 없이 호출해 사용할 경우 store 전체를 구독하므로 addTodo 외의 state가 변경되어도 의도치않은 리렌더링이 발생함.
  const addTodo = useTodoStore((state) => state.addTodo);
  const setViewMode = useTodoAppStore((state) => state.setViewMode);

  const onSubmit = async (data: TodoInput) => {
    try {
      await addTodo(data);
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
    <>
      <button onClick={() => setViewMode("list")}>X</button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-6"
      >
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
          aria-invalid={
            isSubmitted ? (errors.content ? true : false) : undefined
          }
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
    </>
  );
};

export default CreateTodoView;
