import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MainLayout from "@/components/layout/MainLayout.";
import { getBoards } from "./_actions/board";
import { Board } from "@prisma/client";

export default async function Home() {
  const boards = (await getBoards()) as Board[];

  return (
    <main className="">
      <MainLayout boards={boards}>
        <div className="flex justify-center items-center h-screen w-full flex-col">
          <div className="flex justify-center flex-col w-full items-center gap-6 ">
            <p className="text-[#828FA3] font-bold text-[18px] max-w-[343px] text-center md:max-w-[460px] lg:max-w-[500px]">
              This board is empty. Create a new column to get started.
            </p>
            <Button className="bg-primaryPurple max-w-fit rounded-3xl hover:bg-[#A8A4FF]">
              + Add New Column
            </Button>
          </div>
        </div>
      </MainLayout>
    </main>
  );
}

const AddTask = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full flex-col">
      <div className="flex justify-center flex-col w-full items-center gap-6">
        <p className="text-[#828FA3] font-bold text-[18px] max-w-[343px] text-center">
          This board is empty. Create a new column to get started.
        </p>
        <Button className="bg-primaryPurple max-w-fit rounded-3xl">
          + Add New Column
        </Button>
      </div>
    </div>
  );
};
