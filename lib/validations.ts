import * as z from "zod";

const columnSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(4, "Title must be at least 4 characters"),
});

export const boardSchema = z.object({
  boardName: z.string().min(4, "Title must be at least 4 characters"),
  boardColumns: z.array(columnSchema).optional(),
});
