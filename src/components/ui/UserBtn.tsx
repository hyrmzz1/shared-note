interface UserBtnProps {
  type?: "submit" | "reset" | "button"; // 초기값(submit) 지정했으므로 optional
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // 버튼 클릭 시 호출되는 함수
  disabled?: boolean; // 버튼 비활성화 여부
  text: string;
}

const UserBtn = ({
  type = "submit",
  onClick,
  disabled,
  text,
}: UserBtnProps) => {
  return (
    <button
      className="appearance-none focus:outline-none rounded-md w-full px-4 py-5 bg-blue text-white font-bold"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default UserBtn;
