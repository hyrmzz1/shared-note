import { useEffect, useState } from "react";
import useTodoAppStore from "../../stores/useTodoAppStore";
import useTodoStore from "../../stores/useTodoStore";

interface TodoDetailsProps {
  todoId: string;
}

const TodoDetails = ({ todoId }: TodoDetailsProps) => {
  const setViewMode = useTodoAppStore((state) => state.setViewMode);
  const setSelectedTodoId = useTodoAppStore((state) => state.setSelectedTodoId);
  const fetchTodoById = useTodoStore((state) => state.fetchTodoById);
  const selectedTodo = useTodoStore((state) => state.selectedTodo);
  const deleteTodoFromList = useTodoStore((state) => state.deleteTodoFromList);
  const [loading, setLoading] = useState(false);

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

  const handleDelete = async () => {
    if (!todoId) return;

    try {
      await deleteTodoFromList(todoId);
      setViewMode("list");
    } catch (error) {
      console.log("Error deleting todo:", error);
    }
  };

  // 데이터 로드
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
        <button>수정하기</button>
      </div>
    </>
  );
};

export default TodoDetails;
