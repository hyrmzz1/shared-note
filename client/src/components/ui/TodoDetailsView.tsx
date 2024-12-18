import { useEffect, useState } from "react";
import {
  useDeleteTodo,
  useGetTodoById,
  useUpdateTodo,
} from "../../hooks/useTodos";
import useTodoAppStore from "../../stores/useTodoAppStore";
import { useForm } from "react-hook-form";
import { TodoInput } from "../../types/todos";
import TodoForm from "./TodoForm";
import ActionBtn from "./ActionBtn";
import IconButton from "./IconButton";
import CancelIcon from "../../assets/cancel.svg?react";

interface TodoDetailsViewProps {
  todoId: string;
}

const TodoDetailsView = ({ todoId }: TodoDetailsViewProps) => {
  const setViewMode = useTodoAppStore((state) => state.setViewMode);
  const setSelectedTodoId = useTodoAppStore((state) => state.setSelectedTodoId);
  const { data: selectedTodo } = useGetTodoById(todoId); // TODO) 로딩 처리 로직 추가
  const updateMutation = useUpdateTodo();
  const deleteMutation = useDeleteTodo();

  const { register, handleSubmit, formState, reset } = useForm<TodoInput>();
  const [isEditing, setIsEditing] = useState(false);

  const resetViewState = () => {
    setViewMode("list");
    setSelectedTodoId(null);
  };

  const handleUpdate = async (data: TodoInput) => {
    await updateMutation.mutateAsync({ id: todoId, data });
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await deleteMutation.mutateAsync(todoId);
    resetViewState();
  };

  // 수정 모드 초기값 설정
  useEffect(() => {
    if (isEditing && selectedTodo) {
      reset({
        title: selectedTodo.title,
        content: selectedTodo.content,
      });
    }
  }, [isEditing, selectedTodo, reset]);

  // selectedTodo 변경 시 수정 모드 종료
  useEffect(() => {
    setIsEditing(false);
  }, [selectedTodo]);

  return (
    <div className="flex flex-col items-end w-full h-full">
      <IconButton
        label="Close detailed view"
        onClick={resetViewState}
        icon={CancelIcon}
      />
      {isEditing ? (
        <TodoForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={handleUpdate}
          formState={formState}
          onCancel={() => setIsEditing(false)}
          isEditing={true}
        />
      ) : (
        <div className="form-base w-full h-full mt-4 overflow-hidden">
          <div className="flex flex-col grow space-y-2 overflow-hidden">
            <p className="font-bold text-xl">{selectedTodo?.title}</p>
            <div className="grow overflow-y-auto whitespace-pre-wrap break-words">
              {selectedTodo?.content}
            </div>
          </div>
          <div className="flex-row-end">
            <ActionBtn
              type="button"
              onClick={() => {
                handleDelete();
              }}
              text="삭제하기"
            />
            <ActionBtn
              type="button"
              onClick={() => setIsEditing(true)}
              text="수정하기"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoDetailsView;
