import {
  LayoutDashboard,
  Settings,
  ShoppingBag,
  Swords,
  User,
} from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface Props {}

export const Sidebar: FC<any> = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 p-4 h-screen border-r-[1px] flex flex-col justify-between bg-white">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-800 p-3 rounded-lg inline-block">
              <Swords size={25} color="white" />
            </div>
          </Link>
          <span className="border-b-2 border-gray-200 w-full p-2"></span>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-300 p-3 my-4 rounded-lg inline-block">
              <LayoutDashboard size={25} color="black" />
            </div>
          </Link>
          <Link href="/customers">
            <div className="bg-gray-100 hover:bg-gray-300 p-3 my-4 rounded-lg inline-block">
              <User size={25} color="black" />
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-100 hover:bg-gray-300 p-3 my-4 rounded-lg inline-block">
              <ShoppingBag size={25} color="black" />
            </div>
          </Link>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-300 p-3 my-4 rounded-lg inline-block">
              <Settings size={25} color="black" />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};
