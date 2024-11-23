import { useEffect, useState } from "react";
import useTodoAppStore from "../../stores/useTodoAppStore";
import useTodoStore from "../../stores/useTodoStore";
import { TodoInput } from "../../types/todos";
import { useForm } from "react-hook-form";

interface TodoDetailsProps {
  todoId: string;
}

const TodoDetails = ({ todoId }: TodoDetailsProps) => {
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
    <>
      <button
        onClick={() => {
          setViewMode("list");
          setSelectedTodoId(null);
        }}
      >
        X
      </button>
      {isEditing ? (
        <form onSubmit={handleSubmit(handleUpdate)}>
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            {...register("title", { required: true })}
            aria-invalid={
              isSubmitted ? (errors.title ? true : false) : undefined
            }
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
              errors.content
                ? "border-red focus:border-red"
                : "focus:border-blue"
            }`}
          ></input>
          <button
            type="button"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            취소
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md px-4 py-5 focus:border-blue border"
          >
            수정
          </button>
        </form>
      ) : (
        <>
          <div>
            <h1 className="font-bold text-lg">{selectedTodo?.title}</h1>
            <h3>{selectedTodo?.content}</h3>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => {
                handleDelete();
              }}
            >
              삭제하기
            </button>
            <button onClick={() => setIsEditing(true)}>수정하기</button>
          </div>
        </>
      )}
    </>
  );
};

export default TodoDetails;
