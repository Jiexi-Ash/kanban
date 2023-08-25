"use client";
import React, { Children, useEffect } from "react";
import MobileNav from "./MobileNav";

import SideNav from "./SideNav";
import { type } from "os";
import TopNav from "./TopNav";
import { Board } from "@prisma/client";
import { useBoardStore } from "@/app/(store)/boardStore";

type Props = {
  boards?: Board[];
  children: React.ReactNode;
};
function MainLayout({ children, boards }: Props) {
  const { setBoard } = useBoardStore();

  useEffect(() => {
    if (boards && boards.length > 0) {
      setBoard(boards);
    }
  }, [boards, setBoard]);

  return (
    <div className="w-full flex">
      <SideNav />
      <div className="flex flex-col w-full md:ml-[250px] bg-veryDarkGrey">
        <TopNav />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
