import React, { FC } from "react";

interface Props {
  name?: string;
}

const Header: FC<Props> = ({ name }) => {
  return (
    <div className="flex justify-between px-4 pt-4">
      <h1>Dashboard</h1>
      <h1>
        Welcome, <span className="font-medium"> {name ?? "admin"}</span>
      </h1>
    </div>
  );
};

export default Header;
