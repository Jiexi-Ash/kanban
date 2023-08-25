import { create } from "zustand";
import type { Board } from "@prisma/client";

interface BoardStore {
  boards: Board[];
  setBoard: (board: Board[]) => void;
}

export const useBoardStore = create<BoardStore>((set) => ({
  boards: [],
  setBoard: (board) => set({ boards: board }),
}));
