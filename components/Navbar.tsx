"use client";
import Image from "next/image";
import React, { useState } from "react";

import CreateTaskForm from "./forms/CreateTaskForm";
import BoardData from "../data.json";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import exp from "constants";
import { Button } from "./ui/button";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Switch } from "./ui/switch";
import CreateNewBoardForm from "./forms/createNewBoardForm";

function Navbar() {
  const boardNames = BoardData.boards.map((board) => board.name);
  const [selectedBoard, setSelectedBoard] = useState(boardNames[0]);

  return (
    <div className="h-[60px]  flex items-center px-4 bg-darkGrey">
      <div className="w-full flex justify-between items-center">
        <div className="flex">
          <Image
            src="/assets/logo-mobile.svg"
            alt="Logo"
            width="24"
            height="24"
          />
          <Board boardNames={boardNames} selectedBoard={selectedBoard} />
        </div>

        <div className="flex gap-4 items-center">
          <CreateTaskForm />
          <div>
            <Image
              src="/assets/icon-vertical-ellipsis.svg"
              alt="Menu"
              width={4}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

type BoardProps = {
  boardNames: string[];
  selectedBoard: string;
};
export const Board = ({ selectedBoard, boardNames }: BoardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="border-none bg-transparent text-[18px] max-w-fit w-full">
          {selectedBoard}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-darkGrey rounded-lg max-w-xs border-darkGrey px-0 top-60 w-full">
        <DialogHeader className="text-start px-6">
          <DialogTitle className="text-[#828FA3] font-bold  text-xs tracking-[2.4px] flex gap-2">
            <span>ALL BOARDS</span>
            <span>({boardNames.length})</span>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col w-full items-start">
          {boardNames.map((boardName, index) => (
            <div
              key={index}
              className={`flex px-6  gap-2 py-[14px] items-center ${
                selectedBoard === boardName
                  ? "bg-primaryPurple rounded-r-full w-[280px]"
                  : ""
              }`}
            >
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                  fill={selectedBoard === boardName ? "#fff" : "#828FA3"}
                />
              </svg>
              <span
                className={`text-base ${
                  selectedBoard === boardName ? "text-white" : "text-[#828FA3]"
                }`}
              >
                {boardName}
              </span>
            </div>
          ))}
          <CreateNewBoardForm />
        </div>
        <div className="h-12 w-full flex justify-center">
          <div className="justify-center bg-veryDarkGrey flex gap-6 items-center w-full mx-6">
            <SunIcon className="h-6 w-6 text-[#828FA3]" />
            <Switch />
            <MoonIcon className="h-6 w-6 text-[#828FA3]" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
