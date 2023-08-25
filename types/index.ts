import type { Board, Columns, Tasks, SubTasks } from "@prisma/client";

export type BoardType = {
  board: Board;
  Columns: Columns[];
};
