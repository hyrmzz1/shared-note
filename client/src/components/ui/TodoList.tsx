import { useEffect } from "react";
import TodoItem from "./TodoItem";
import useTodoStore from "../../stores/useTodoStore";
import useTodoAppStore from "../../stores/useTodoAppStore";
import AddIcon from "../../assets/add.svg?react";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const fetchTodos = useTodoStore((state) => state.fetchTodos);
  const setViewMode = useTodoAppStore((state) => state.setViewMode);
  const setSelectedTodoId = useTodoAppStore((state) => state.setSelectedTodoId);
  const selectedTodoId = useTodoAppStore((state) => state.selectedTodoId);
  const total = todos.length;

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between p-2 border-b-2 border-divider_default">
        <p className="font-semibold">Total: {total}</p>
        <button
          aria-label="Create a new post"
          onClick={() => {
            setViewMode("form");
            setSelectedTodoId(null);
          }}
        >
          <AddIcon className="w-4 h-4" />
        </button>
      </div>

      <div className="grow overflow-y-auto flex flex-col space-y-4 pt-4 px-2">
        {todos.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-center text-text_info">
              아직 등록된 메모가 없어요.
              <br />
              메모를 작성해보세요!
            </p>
          </div>
        ) : (
          todos.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setViewMode("details");
                setSelectedTodoId(item.id);
              }}
            >
              <TodoItem item={item} isSelected={selectedTodoId === item.id} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
