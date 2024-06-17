import { ShoppingBag, Swords } from "lucide-react";
import { data } from "../utils/data/data";
import React from "react";

export const RecentOrders = () => {
  return (
    <div className="w-full col-span-1 p-4 relative md:h-[70vh] h-[50vh] m-auto bg-white rounded-lg border overflow-y-scroll">
      <h2>Recent Orders</h2>
      <ul>
        {data.map((order: any, index: number) => (
          <li
            key={index}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="p-3 rounded-lg bg-purple-100">
              <ShoppingBag color="purple" />
            </div>

            <div className="pl-4">
              <p className="font-bold">${order.total}</p>
              <p className="text-gray-400 text-sm">{order.name.first}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
