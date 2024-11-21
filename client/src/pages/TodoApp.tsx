import TodoList from "../components/ui/TodoList";
import TodoForm from "../components/ui/TodoForm";
import TodoDetails from "../components/ui/TodoDetails";
import useTodoAppStore from "../stores/useTodoAppStore";

const TodoApp = () => {
  const viewMode = useTodoAppStore((state) => state.viewMode);

  const rightPanel = () => {
    if (viewMode === "form") return <TodoForm />;
    if (viewMode === "details") return <TodoDetails />;
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
