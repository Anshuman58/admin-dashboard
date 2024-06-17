import { data } from "@/utils/data/data";
import { EllipsisVertical, ShoppingBag } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between px-4 pt-4 ">
        <h2>Orders</h2>
        <p>
          Welcome Back, <span className="font-semibold">Anshuman</span>
        </p>
      </div>
      <div className="p-4">
        <div className="w-full p-4 m-auto rounded-lg bg-white overflow-y-auto border">
          <div className="p-2 my-3 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between">
            <p>Order</p>
            <p className="sm:text-left text-right">Status</p>
            <p className="md:grid hidden">Last order</p>
            <p className="sm:grid hidden">Method</p>
          </div>
          <ul>
            {data.map((item: any, index: number) => (
              <li
                key={index}
                className="p-2 my-3 bg-gray-50 hover:bg-gray-100 border rounded-lg grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between"
              >
                <div className="flex">
                  <div className="p-3 bg-purple-200 rounded-md">
                    <ShoppingBag fill="purple" strokeWidth={1} color="#fff" />
                  </div>
                  <div className="pl-3 ">
                    <p className="font-semibold text-gray-800">${item.total}</p>
                    <p className="text-gray-800 text-sm">{item.name.first}</p>
                  </div>
                </div>
                <p className="sm:text-left text-right">
                  <span
                    className={
                      item.status == "Processing"
                        ? "bg-blue-200 p-2 rounded-lg"
                        : item.status == "Completed"
                        ? "bg-green-200 p-2 rounded-lg"
                        : "bg-yellow-200 p-2 rounded-lg"
                    }
                  >
                    {item.status}
                  </span>
                </p>
                <p className="md:grid hidden">{item.date}</p>
              
                  <div className="sm:flex hidden items-center justify-between">
                    <p>{item.method}</p>
                    <EllipsisVertical className="cursor-pointer"/>
                  </div>
               
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default page;
