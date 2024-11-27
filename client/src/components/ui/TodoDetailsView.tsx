import { useEffect, useState } from "react";
import useTodoAppStore from "../../stores/useTodoAppStore";
import useTodoStore from "../../stores/useTodoStore";
import { TodoInput } from "../../types/todos";
import { useForm } from "react-hook-form";
import ActionBtn from "./ActionBtn";
import CancelIcon from "../../assets/cancel.svg?react";

interface TodoDetailsViewProps {
  todoId: string;
}

const TodoDetailsView = ({ todoId }: TodoDetailsViewProps) => {
  const setViewMode = useTodoAppStore((state) => state.setViewMode);
  const setSelectedTodoId = useTodoAppStore((state) => state.setSelectedTodoId);
  const fetchTodoById = useTodoStore((state) => state.fetchTodoById);
  const selectedTodo = useTodoStore((state) => state.selectedTodo);
  const deleteTodoFromList = useTodoStore((state) => state.deleteTodoFromList);
  const updateTodoFromList = useTodoStore((state) => state.updateTodoFromList);

  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
    reset,
  } = useForm<TodoInput>();

  const fetchTodo = async () => {
    if (!todoId || loading) return;
    setLoading(true);

    try {
      await fetchTodoById(todoId);
    } catch (error) {
      console.log("Error fetching todo:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (data: TodoInput) => {
    if (!todoId) return;

    try {
      await updateTodoFromList(todoId, data);
      setIsEditing(false);
    } catch (error) {
      alert("에러 발생! 다시 시도해주세요.");
    }
  };

  const handleDelete = async () => {
    if (!todoId) return;

    try {
      await deleteTodoFromList(todoId);
      setViewMode("list");
    } catch (error) {
      console.log("Error deleting todo:", error);
    }
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

  // todoId 변경 시 데이터 로드
  useEffect(() => {
    fetchTodo();
  }, [todoId]);

  return (
    <div className="flex flex-col items-end w-full h-full">
      <button
        onClick={() => {
          setViewMode("list");
          setSelectedTodoId(null);
        }}
      >
        <CancelIcon className="w-4 h-4" />
      </button>
      {isEditing ? (
        <form
          onSubmit={handleSubmit(handleUpdate)}
          className="form-base grow w-full mt-4"
        >
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            {...register("title", { required: true })}
            aria-invalid={
              isSubmitted ? (errors.title ? true : false) : undefined
            }
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
              onClick={() => {
                setIsEditing(false);
              }}
              disabled={isSubmitting}
              text="취소"
            />
            <ActionBtn disabled={isSubmitting} text="수정 완료" />
          </div>
        </form>
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
