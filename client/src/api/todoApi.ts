import instance from "./instance";
import { Todo, TodoInput } from "../types/todos";

const getUserToken = (): string => {
  const userToken = localStorage.getItem("token");
  if (!userToken) throw new Error("User token is missing");
  return userToken;
};

export const createTodo = async (todoInput: TodoInput): Promise<Todo> => {
  const userToken = getUserToken();

  const response = await instance.post<{ data: Todo }>("/todos", todoInput, {
    headers: { Authorization: `Bearer ${userToken}` },
  });

  return response.data.data;
};

export const getTodos = async (): Promise<Todo[]> => {
  const userToken = getUserToken();

  const response = await instance.get<{ data: Todo[] }>("/todos", {
    headers: { Authorization: `Bearer ${userToken}` },
  });

  return response.data.data;
};

export const getTodoById = async (id: string): Promise<Todo> => {
  const userToken = getUserToken();

  const response = await instance.get<{ data: Todo }>(`/todos/${id}`, {
    headers: { Authorization: `Bearer ${userToken}` },
  });

  return response.data.data;
};

export const updateTodo = async (
  id: string,
  todoInput: TodoInput
): Promise<Todo> => {
  const userToken = getUserToken();

  const response = await instance.put<{ data: Todo }>(
    `/todos/${id}`,
    todoInput,
    {
      headers: { Authorization: `Bearer ${userToken}` },
    }
  );

  return response.data.data;
};

export const deleteTodo = async (id: string): Promise<void> => {
  const userToken = getUserToken();

  await instance.delete<{ data: Todo }>(`/todos/${id}`, {
    headers: { Authorization: `Bearer ${userToken}` },
  });
};
