import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className="flex min-h-screen bg-slate-600">
      <div className=" container mx-auto flex">
        <SideBar />
        <div className="flex-1">
            <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Root;
