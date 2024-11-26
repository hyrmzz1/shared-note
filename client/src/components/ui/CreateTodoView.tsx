import { useForm } from "react-hook-form";
import { TodoInput } from "../../types/todos";
import useTodoStore from "../../stores/useTodoStore";
import useTodoAppStore from "../../stores/useTodoAppStore";
import ActionBtn from "./ActionBtn";

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
    <div className="flex flex-col w-full h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-base w-full h-full"
      >
        <input
          type="text"
          placeholder="제목을 입력해주세요."
          {...register("title", { required: true })}
          aria-invalid={isSubmitted ? (errors.title ? true : false) : undefined}
          className={`input-base ${
            errors.title ? "input-error" : "input-normal"
          }`}
        ></input>
        <textarea
          placeholder="내용을 입력해주세요."
          {...register("content", { required: true })}
          aria-invalid={
            isSubmitted ? (errors.content ? true : false) : undefined
          }
          className={`input-base textarea-base ${
            errors.content ? "input-error" : "input-normal"
          }`}
        ></textarea>
        <div className="flex-row-end">
          <ActionBtn
            type="button"
            onClick={() => setViewMode("list")}
            text="닫기"
          />
          <ActionBtn disabled={isSubmitting} text="추가하기" />
        </div>
      </form>
    </div>
  );
};

export default CreateTodoView;
