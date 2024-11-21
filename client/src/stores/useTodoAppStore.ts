import { create } from "zustand";

type viewMode = "list" | "form" | "details";

interface TodoAppStore {
  viewMode: viewMode;
  selectedTodoId: string | null;
  setViewMode: (mode: viewMode) => void;
  setSelectedTodoId: (id: string | null) => void;
}

const useTodoAppStore = create<TodoAppStore>((set) => ({
  viewMode: "list",
  selectedTodoId: null,
  setViewMode: (mode) => set({ viewMode: mode }),
  setSelectedTodoId: (id) => set({ selectedTodoId: id }),
}));

export default useTodoAppStore;
