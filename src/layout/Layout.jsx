import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { BsPlusSquareDotted } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdFiberNew, MdTextsms } from "react-icons/md";
import { NavLink } from "react-router-dom";
import NavBar from "./LayoutComponents/NavBar/NavBar";

export default function Layout({ children }) {
  return (
    <div className="main w-full h-screen bg-amber-400">
      <div className="sidebar-container rounded-t-2xl flex justify-around items-center w-full h-16  bg-white absolute bottom-0 left-0 text-2xl text-gray-700 z-10">
        <NavLink to={`/`} className={'text-xs font-mono flex justify-center items-center flex-col'}>
          <AiTwotoneHome className="text-2xl" />
          Home
        </NavLink>
        <NavLink to={`/`} className={'text-xs font-mono flex justify-center items-center flex-col'}>
          <MdFiberNew className="text-2xl" />
          New
        </NavLink>
        <NavLink to={`/`} className={'text-xs font-mono flex justify-center items-center flex-col'}>
          <BsPlusSquareDotted className="text-3xl" />
        </NavLink>
        <NavLink to={`/`} className={'text-xs font-mono flex justify-center items-center flex-col'}>
          <MdTextsms className="text-2xl" />
          Inbox
        </NavLink>
        <NavLink to={`/`} className={'text-xs font-mono flex justify-center items-center flex-col'}>
          <CgProfile className="text-2xl" />
          Profile
        </NavLink>
      </div>
      <NavBar />
      <>{children}</>
    </div>
  );
}
