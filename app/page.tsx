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

export default function Home() {
  return (
    <main className="flex min-h-screen  bg-veryDarkGrey">
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
    </main>
  );
}

const AddTask = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button></Button>
      </DialogTrigger>
    </Dialog>
  );
};
