import React from "react";

export default function SecondaryButton({ text, Icon }) {
  return (
    <button className="w-32 h-10 mr-1 border-4 border-gray-200 font-bold text-gray-400 hover:bg-gray-200 rounded-xl flex  justify-center items-center">
      {Icon&&<Icon className="text-xl mr-2" />} {text&&text}
    </button>
  );
}
