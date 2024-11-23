import { create } from "zustand";
import { Todo, TodoInput } from "../types/todos";
import {
  createTodo,
  getTodoById,
  getTodos,
  deleteTodo,
  updateTodo,
} from "../api/todoApi";

interface TodoStore {
  todos: Todo[];
  selectedTodo: Todo | null;
  addTodo: (todoInput: TodoInput) => Promise<void>;
  fetchTodos: () => Promise<void>;
  fetchTodoById: (id: string) => Promise<void>;
  updateTodoFromList: (id: string, todoInput: TodoInput) => Promise<void>;
  deleteTodoFromList: (id: string) => Promise<void>;
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  selectedTodo: null,

  // create
  addTodo: async (todoInput: TodoInput) => {
    try {
      const newTodo = await createTodo(todoInput);
      set((prev) => ({
        todos: [...prev.todos, newTodo],
      }));
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

  // read (todo detail)
  fetchTodoById: async (id: string) => {
    try {
      const todo = await getTodoById(id);
      set({ selectedTodo: todo });
    } catch (error) {
      console.error("fetchTodoById 에러 발생", error);
      throw error;
    }
  },

  // update
  updateTodoFromList: async (id: string, todoInput: TodoInput) => {
    try {
      const updatedTodo = await updateTodo(id, todoInput);
      set((prev) => ({
        todos: prev.todos.map((todo) => (todo.id === id ? updatedTodo : todo)),
        selectedTodo: updatedTodo,
      }));
    } catch (error) {
      console.error("deleteTodoFromList 에러 발생", error);
      throw error;
    }
  },

  // delete
  deleteTodoFromList: async (id: string) => {
    try {
      await deleteTodo(id);
      set((prev) => ({
        todos: prev.todos.filter((todo) => todo.id !== id),
        selectedTodo: null,
      }));
    } catch (error) {
      console.error("deleteTodoFromList 에러 발생", error);
      throw error;
    }
  },
}));

export default useTodoStore;
