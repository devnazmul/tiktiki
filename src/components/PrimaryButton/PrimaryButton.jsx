import React from "react";

export default function PrimaryButton({ text, Icon }) {
  return (
    <button className="w-32  font-bold text-white bg-primary hover:bg-lime-400 h-10 mr-1 border-4 border-primary hover:border-lime-400 rounded-xl">
      {Icon && <Icon className="text-xl mr-2" />} {text && text}
    </button>
  );
}
