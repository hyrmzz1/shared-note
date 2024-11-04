interface UserInputProps {
  type?: string; // 초기값(text) 지정했으므로 optional
  name: string;
  placeholder: string;
}

const UserInput = ({ type = "text", name, placeholder }: UserInputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="appearance-none border focus:bg-white focus:border-blue focus:outline-none rounded-md w-full text-text_default px-4 py-5 bg-gray50 border-gray400"
    ></input>
  );
};

export default UserInput;
