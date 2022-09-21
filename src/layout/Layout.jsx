import React from "react";
import NavBar from "./LayoutComponents/NavBar/NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {/* ===== START MAIN =====  */}
      <div className="main-containeer flex">
        <div className="sidebar-container w-2/12 h-screen  bg-emerald-500"></div>
        <div className="main w-10/12 h-screen bg-amber-400">{children}</div>
      </div>
      {/* ===== END MAIN =====  */}

    </div>
  );
}
