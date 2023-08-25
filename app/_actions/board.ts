"use server";

import { prisma } from "@/lib/prisma";
import * as z from "zod";

import { boardSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";

export const createBoard = async (boardData: z.infer<typeof boardSchema>) => {
  const { boardName, boardColumns } = boardData;

  //   map boardColumns without id
  const boardColumnsWithoutId = boardColumns?.map((column) => {
    const { id, ...rest } = column;
    return rest;
  });

  if (!boardName) {
    throw new Error("Board name is required");
  }

  const board = await prisma.board.create({
    data: {
      name: boardName,
      Columns: {
        create: boardColumnsWithoutId,
      },
    },
  });

  console.log("Created board", board);

  revalidatePath("/");

  return;
};
