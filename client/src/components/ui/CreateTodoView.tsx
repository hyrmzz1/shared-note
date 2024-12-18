import { useCreateTodo } from "../../hooks/useTodos";
import useTodoAppStore from "../../stores/useTodoAppStore";
import { useForm } from "react-hook-form";
import { TodoInput } from "../../types/todos";
import TodoForm from "./TodoForm";

const CreateTodoView = () => {
  const createMutation = useCreateTodo();
  const setViewMode = useTodoAppStore((state) => state.setViewMode);

  const { register, handleSubmit, reset, formState } = useForm<TodoInput>();

  const onSubmit = async (data: TodoInput) => {
    await createMutation.mutateAsync(data);
    reset(); // 폼 초기화
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
