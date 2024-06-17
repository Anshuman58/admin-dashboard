import { data } from "@/utils/data/data";
import { Ellipsis, EllipsisVertical, User } from "lucide-react";
import React from "react";

const Customers = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between p-4">
        <h2>Customers</h2>
        <p>
          Welcome, <span className="font-medium">Anshuman</span>
        </p>
      </div>
      <div className="p-4">
        <div className="w-full bg-white p-4 rounded-lg border m-auto overflow-y-auto">
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between p-2 ">
            <span>Name</span>
            <span className="sm:text-left text-right">Email</span>
            <span className="md:grid hidden">Last Order</span>
            <span className="sm:grid hidden">Method</span>
          </div>
          <ul>
            {data.map((item: any, index: number) => (
              <li
                key={index}
                className="w-full p-4 my-2 rounded-lg border bg-gray-50 hover:bg-gray-100 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between"
              >
                <div className="flex items-center ">
                  <div className="p-3 bg-purple-200 rounded-lg">
                    <User fill="purple" strokeWidth={0} />
                  </div>
                  <p className="pl-4">
                    {item.name.first + " " + item.name.last}
                  </p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  {item.name.first.toLowerCase()}@gmail.com
                </p>
                <p className="md:grid hidden">{item.date}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p className="sm:grid hidden">{item.method}</p>
                  <EllipsisVertical className="cursor-pointer" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Customers;
