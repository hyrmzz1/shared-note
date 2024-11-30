import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { TodoInput } from "../../types/todos";
import ActionBtn from "./ActionBtn";

interface TodoFormProps {
  register: UseFormRegister<TodoInput>;
  handleSubmit: UseFormHandleSubmit<TodoInput>;
  onSubmit: (data: TodoInput) => void;
  formState: FormState<TodoInput>;
  onCancel: () => void;
  isEditing?: boolean; // 생성, 수정모드 구분용
}

const TodoForm = ({
  register,
  handleSubmit,
  onSubmit,
  formState,
  onCancel,
  isEditing = false,
}: TodoFormProps) => {
  const { errors, isSubmitted, isSubmitting } = formState;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form-base grow w-full mt-4"
    >
      <input
        type="text"
        placeholder="제목을 입력해주세요."
        {...register("title", { required: true })}
        aria-invalid={isSubmitted ? !!errors.title : undefined}
        className={`input-base ${
          errors.title ? "input-error" : "input-normal"
        }`}
      ></input>
      <textarea
        placeholder="내용을 입력해주세요."
        {...register("content", { required: true })}
        aria-invalid={isSubmitted ? !!errors.content : undefined}
        className={`input-base textarea-base ${
          errors.content ? "input-error" : "input-normal"
        }`}
      ></textarea>
      <div className="flex-row-end">
        <ActionBtn
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          text={isEditing ? "취소" : "닫기"}
        />
        <ActionBtn
          disabled={isSubmitting}
          text={isEditing ? "수정 완료" : "추가하기"}
        />
      </div>
    </form>
  );
};

export default TodoForm;
