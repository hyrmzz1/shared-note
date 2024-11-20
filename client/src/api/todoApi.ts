import instance from "./instance";
import { Todo, TodoInput } from "../types/todos";

// userToken 가져온 후 유효성 검사하는 로직 중복되므로 별도로 분리하기
export const createTodo = async (todoInput: TodoInput): Promise<Todo> => {
  const userToken = localStorage.getItem("token");
  // 토큰 유효성 검사 로직 필요

  const response = await instance.post<Todo>("/todos", todoInput, {
    headers: { Authorization: `Bearer ${userToken}` },
  });

  return response.data;
};

export const getTodos = async (): Promise<Todo[]> => {
  const userToken = localStorage.getItem("token");
  // 토큰 유효성 검사 로직 필요

  const response = await instance.get<{ data: Todo[] }>("/todos", {
    headers: { Authorization: `Bearer ${userToken}` },
  });

  return response.data.data;
};
