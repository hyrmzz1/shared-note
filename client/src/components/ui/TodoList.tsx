// import TodoItem from "./TodoItem";
import AddIcon from "../../assets/add-circle.svg?react";

const TodoList = () => {
  //   const total = items.length;

  return (
    <div>
      {/* todo) 스크롤 구현, 아이템 없을 떄 조건부 렌더링 */}
      <div className="flex justify-between bg-gray300">
        {/* <p>total: {total}</p> */}

        {/* onClick -> TodoForm 띄우기 */}
        <button>
          <AddIcon className="w-7 h-7" />
        </button>
      </div>

      {/* {items.map((item, idx) => (
        <TodoItem key={idx} item={item} />
      ))} */}
    </div>
  );
};

export default TodoList;
