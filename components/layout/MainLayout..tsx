import React, { Children } from "react";
import MobileNav from "./MobileNav";
import SideNav from "./SideNav";
import { type } from "os";
import TopNav from "./TopNav";

type Props = {
  children: React.ReactNode;
};
function MainLayout({ children }: Props) {
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
