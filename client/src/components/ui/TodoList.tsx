import { useEffect } from "react";
import TodoItem from "./TodoItem";
import useTodoStore from "../../stores/useTodoStore";
import useTodoAppStore from "../../stores/useTodoAppStore";
import AddIcon from "../../assets/add-circle.svg?react";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const fetchTodos = useTodoStore((state) => state.fetchTodos);
  const setViewMode = useTodoAppStore((state) => state.setViewMode);
  const setSelectedTodoId = useTodoAppStore((state) => state.setSelectedTodoId);
  const total = todos.length;

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {/* todo) 스크롤 구현, 아이템 없을 떄 조건부 렌더링 */}
      <div className="flex justify-between bg-gray300">
        <p>total: {total}</p>
        <button onClick={() => setViewMode("form")}>
          <AddIcon className="w-7 h-7" />
        </button>
      </div>

      {todos.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            setSelectedTodoId(item.id);
            setViewMode("details");
          }}
        >
          <TodoItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
