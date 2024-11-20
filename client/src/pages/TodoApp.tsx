import TodoForm from "../components/ui/TodoForm";
import TodoList from "../components/ui/TodoList";

const TodoApp = () => {
  return (
    <div className="flex flex-1 justify-center h-full py-10 space-x-6">
      <div className="w-[25rem] p-6 rounded-lg bg-white shadow-md">
        <TodoList />
      </div>

      {/* TodoForm 또는 TodoDetails */}
      {/* 조건부 렌더링) TodoForm -> + 버튼 클릭시 표시, TodoDetails: TodoItem 클릭시 표시 */}
      <div className="w-[25rem] p-6 rounded-lg bg-white shadow-md">
        <TodoForm />
      </div>
    </div>
  );
};

export default TodoApp;
