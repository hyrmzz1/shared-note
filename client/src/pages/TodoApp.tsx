import TodoList from "../components/ui/TodoList";
import CreateTodoView from "../components/ui/CreateTodoView";
import TodoDetailsView from "../components/ui/TodoDetailsView";
import useTodoAppStore from "../stores/useTodoAppStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TodoApp = () => {
  const viewMode = useTodoAppStore((state) => state.viewMode);
  const selectedTodoId = useTodoAppStore((state) => state.selectedTodoId);
  // const setViewMode = useTodoAppStore((state) => state.setViewMode);
  // const setSelectedTodoId = useTodoAppStore((state) => state.setSelectedTodoId);

  const navigate = useNavigate();
  // const { id } = useParams();

  // // URL에 있는 `:id`를 상태로 초기화 -> 이 코드 있으면 viewMode 전환 로직 미작동
  // useEffect(() => {
  //   if (id && viewMode !== "details") {
  //     setViewMode("details");
  //     setSelectedTodoId(id);
  //   }
  // }, [id, viewMode, setViewMode, setSelectedTodoId]);

  // 상태에 따라 URL 변경
  useEffect(() => {
    if (viewMode === "details" && selectedTodoId) {
      navigate(`/todos/${selectedTodoId}`);
    } else if (viewMode === "list") {
      navigate("/todos");
    }
  }, [viewMode, selectedTodoId, navigate]);

  const rightPanel = () => {
    if (viewMode === "form") return <CreateTodoView />;
    if (viewMode === "details" && selectedTodoId)
      return <TodoDetailsView todoId={selectedTodoId} />;
    return null;
  };

  return (
    <div className="flex flex-1 justify-center h-full py-10 space-x-6">
      <div className="w-[25rem] p-6 rounded-lg bg-white shadow-md">
        <TodoList />
      </div>

      {viewMode !== "list" && (
        <div className="w-[25rem] p-6 rounded-lg bg-white shadow-md">
          {rightPanel()}
        </div>
      )}
    </div>
  );
};

export default TodoApp;
