import { forwardRef } from "react";

interface AuthInputProps {
  type?: string; // 초기값(text) 지정했으므로 optional
  placeholder: string;
  isError?: boolean;
  errorMessage?: string;
  // name은 react-hook-form의 register에서 제공
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>((props, ref) => {
  const { type = "text", placeholder, isError, errorMessage, ...rest } = props;

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        autoComplete="off"
        className={`input-base ${isError ? "input-error" : "input-normal"}`}
        {...rest}
      ></input>

      {isError && errorMessage && (
        <p role="alert" className="text-text_error text-sm">
          {errorMessage}
        </p>
      )}
    </>
  );
});

export default AuthInput;
