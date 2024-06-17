import React, { FC } from "react";

export const TopCards: FC<any> = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white w-full flex justify-between p-4 border rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-xl font-semibold">$7,846</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="p-2 bg-green-200 flex items-center justify-center rounded-lg">
          <span className="text-green-700">+18%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white w-full flex justify-between p-4 border rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-xl font-semibold">$15,35,846</p>
          <p className="text-gray-600">YTD Revenue</p>
        </div>
        <p className="p-2 bg-green-200 flex items-center justify-center rounded-lg">
          <span className="text-green-700">+18%</span>
        </p>{" "}
      </div>
      <div className="bg-white w-full flex justify-between p-4 border rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-xl font-semibold">17,846</p>
          <p className="text-gray-600">Customers</p>
        </div>
        <p className="p-2 bg-green-200 flex items-center justify-center rounded-lg">
          <span className="text-green-700">+18%</span>
        </p>
      </div>
    </div>
  );
};
