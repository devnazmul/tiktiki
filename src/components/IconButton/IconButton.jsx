import React from "react";

export default function IconButton({Icon}) {
  return (
    <button className="w-5 mr-1">
        {Icon && <Icon  className="text-2xl text-gray-700" />}
    </button>
  );
}
