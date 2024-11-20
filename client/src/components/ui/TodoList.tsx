import useTodoStore from "../../stores/useTodoStore";
import { useEffect } from "react";
import AddIcon from "../../assets/add-circle.svg?react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, fetchTodos } = useTodoStore();
  const total = todos.length;

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {/* todo) 스크롤 구현, 아이템 없을 떄 조건부 렌더링 */}
      <div className="flex justify-between bg-gray300">
        <p>total: {total}</p>

        {/* onClick -> TodoForm 띄우기 */}
        <button>
          <AddIcon className="w-7 h-7" />
        </button>
      </div>

      {todos.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
