import useTodoAppStore from "../../stores/useTodoAppStore";

// TODO) 클릭한 item에 해당하는 title/content 띄우기
const TodoDetails = () => {
  const setViewMode = useTodoAppStore((state) => state.setViewMode);

  return (
    <>
      <button onClick={() => setViewMode("list")}>X</button>
      <div>
        <h1 className="font-bold text-lg">title</h1>
        <h3>content</h3>
      </div>
      <div className="flex justify-end">
        <button>삭제하기</button>
        <button>수정하기</button>
      </div>
    </>
  );
};

export default TodoDetails;
