import { create } from "zustand";
import { Todo, TodoInput } from "../types/todos";
import { createTodo, getTodoById, getTodos } from "../api/todoApi";

interface TodoStore {
  todos: Todo[];
  selectedTodo: Todo | null;
  addTodo: (todoInput: TodoInput) => Promise<void>;
  fetchTodos: () => Promise<void>;
  fetchTodoById: (id: string) => Promise<void>;
}

const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  selectedTodo: null,

  // create
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

  // read (todos)
  fetchTodos: async () => {
    try {
      const fetchedTodos = await getTodos();
      set({ todos: fetchedTodos });
    } catch (error) {
      console.error("fetchTodos 에러 발생", error);
    }
  },

  //read (todo detail)
  fetchTodoById: async (id: string) => {
    try {
      const todo = await getTodoById(id);
      set({ selectedTodo: todo });
    } catch (error) {
      console.error("fetchTodoById 에러 발생", error);
      throw error;
    }
  },
}));

export default useTodoStore;
