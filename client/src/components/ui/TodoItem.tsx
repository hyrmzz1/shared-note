import { Todo } from "../../types/todos";

interface TodoItemProps {
  item: Todo;
  isSelected: boolean;
}

const TodoItem = ({ item, isSelected }: TodoItemProps) => {
  return (
    // outline outline-offset-2 outline-blue
    <div
      className={`p-4 rounded-xl shadow-md bg-[#ebf1ff] hover:bg-[#d7e3ff] ${
        isSelected ? "outline outline-offset-2 outline-blue" : ""
      }`}
    >
      {item.title}
    </div>
  );
};

export default TodoItem;
