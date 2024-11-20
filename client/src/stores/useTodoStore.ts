import { create } from "zustand";
import { Todo, TodoInput } from "../types/todos";
import { createTodo, getTodos } from "../api/todoApi";

interface TodoStore {
  todos: Todo[];
  addTodo: (todoInput: TodoInput) => Promise<void>;
  fetchTodos: () => Promise<void>;
}

const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],

  addTodo: async (todoInput: TodoInput) => {
    try {
      const newTodo = await createTodo(todoInput);
      set((prev) => ({
        todos: [...prev.todos, newTodo],
      }));
      await get().fetchTodos();
    } catch (error) {
      console.error("addTodo 에러 발생", error);
      throw error;
    }
  },

  fetchTodos: async () => {
    try {
      const fetchedTodos = await getTodos();
      set({ todos: fetchedTodos });
    } catch (error) {
      console.error("조회 에러 발생!", error);
    }
  },
}));

export default useTodoStore;
