interface ActionBtnProps {
  type?: "submit" | "reset" | "button"; // 초기값(submit) 지정했으므로 optional
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // 버튼 클릭 시 호출되는 함수
  disabled?: boolean; // 버튼 비활성화 여부
  text: string;
}

const ActionBtn = ({
  type = "submit",
  onClick,
  disabled,
  text,
}: ActionBtnProps) => {
  return (
    <button
      className="btn-base"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ActionBtn;
