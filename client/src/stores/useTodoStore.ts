import { create } from "zustand";
import { Todo, TodoInput } from "../types/todos";
import { createTodo } from "../api/todoApi";

interface TodoStore {
  todos: Todo[];
  addTodo: (todoInput: TodoInput) => Promise<void>;
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],

  addTodo: async (todoInput: TodoInput) => {
    try {
      const newTodo = await createTodo(todoInput);
      console.log("통신 성공", newTodo);
      set((prev) => ({
        todos: [...prev.todos, newTodo],
      }));
    } catch (error) {
      console.error("addTodo 에러 발생", error);
      throw error;
    }
  },
}));

export default useTodoStore;
