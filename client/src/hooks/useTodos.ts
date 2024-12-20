import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from "../api/todoApi";
import { Todo, TodoInput } from "../types/todos";

export const useGetTodos = () => {
  return useQuery<Todo[]>({
    queryKey: ["todos"], // 캐시 키
    queryFn: getTodos, // 데이터 가져오는 함수
    staleTime: 1000 * 60 * 5, // 데이터 신선도 유지 시간 (default: 0)
    gcTime: 1000 * 60 * 10, // 캐시 데이터가 메모리에 남아있는 시간 (default: 1000 * 60 * 5)
  });
};

export const useGetTodoById = (id: string) => {
  return useQuery<Todo>({
    queryKey: ["todos", id],
    queryFn: () => getTodoById(id),
    enabled: !!id, // id가 있을 때만 실행
    staleTime: 1000 * 60,
  });
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todoInput: TodoInput) => createTodo(todoInput),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] }); // 목록 갱신 (새로고침 없이 새 데이터 즉시 반영)
    },
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: TodoInput }) =>
      updateTodo(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      queryClient.invalidateQueries({ queryKey: ["todos", id] }); // 상세 목록 갱신
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
