import { useForm } from "react-hook-form";
import { TodoInput } from "../../types/todos";
import useTodoStore from "../../stores/useTodoStore";
import useTodoAppStore from "../../stores/useTodoAppStore";
import TodoForm from "./TodoForm";

const CreateTodoView = () => {
  // const { addTodo } = useTodoStore(); // selector 없이 호출해 사용할 경우 store 전체를 구독하므로 addTodo 외의 state가 변경되어도 의도치않은 리렌더링이 발생함.
  const addTodo = useTodoStore((state) => state.addTodo);
  const setViewMode = useTodoAppStore((state) => state.setViewMode);

  const { register, handleSubmit, reset, formState } = useForm<TodoInput>();

  const onSubmit = async (data: TodoInput) => {
    try {
      await addTodo(data);
      reset(); // 폼 초기화
    } catch (error) {
      // console.log("에러 발생:", error);
      alert("에러 발생! 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <TodoForm
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        formState={formState}
        onCancel={() => setViewMode("list")}
      />
    </div>
  );
};

export default CreateTodoView;
