import { Todo } from "../../types/todos";

interface TodoItemProps {
  item: Todo;
}

const TodoItem = ({ item }: TodoItemProps) => {
  return (
    <div>
      <h1 className="font-bold text-lg">{item.title}</h1>
      {/* <h3>{item.content}</h3> */}
    </div>
  );
};

export default TodoItem;
