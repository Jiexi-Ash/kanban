import { create } from "zustand";

type columns = {
  name: string;
  tasks?: tasks[];
};
type tasks = {
  title: string;
  description: string;
  status: string;
  subtasks?: subtasks[];
};
type subtasks = {
  title: string;
  isCompleted: boolean;
};
type board = {
  name: string;
  columns: columns[];
};

interface BoardStore {
  toggleModal: boolean;
  board: board[];
  totalBoards: number;
  addBoard: () => void;
  showModal: () => void;
}

export const useBoardStore = create<BoardStore>((set) => ({
  board: [],
  toggleModal: false,
  totalBoards: 0,
  addBoard: () => set((state) => ({})),
  showModal: () => set((state) => ({ toggleModal: !state.toggleModal })),
}));
