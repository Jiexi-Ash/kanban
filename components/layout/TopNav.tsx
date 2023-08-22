import React from "react";
import CreateTaskForm from "../forms/CreateTaskForm";
import { Button } from "../ui/button";
import Image from "next/image";

function TopNav() {
  return (
    <div className="hidden md:flex  w-full py-8 bg-mediumGrey px-6 justify-between items-center border-[#979797] border-b">
      <h1 className="text-white text-xl font-bold">Platform Launch</h1>
      <div className="flex  items-center justify-center">
        <CreateTaskForm />
        <Button
          variant="ghost"
          size="icon"
          className="bg-transparent hover:bg-transparent"
        >
          <Image
            src="/assets/icon-vertical-ellipsis.svg"
            width={4}
            height={20}
            alt=""
            className=""
          />
        </Button>
      </div>
    </div>
  );
}

export default TopNav;
