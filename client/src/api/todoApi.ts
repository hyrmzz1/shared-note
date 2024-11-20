import instance from "./instance";
import { Todo, TodoInput } from "../types/todos";

export const createTodo = async (todoInput: TodoInput): Promise<Todo> => {
  const userToken = localStorage.getItem("token");

  const response = await instance.post<Todo>("/todos", todoInput, {
    headers: { Authorization: `Bearer ${userToken}` },
  });

  return response.data;
};
