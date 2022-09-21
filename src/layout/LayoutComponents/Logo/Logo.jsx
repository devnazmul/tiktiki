import React from "react";

export default function Logo({brandName,LogoUrl}) {
  return (
    <div className="logo-div w-4/12 pl-10">
      <div className="flex w-1/2 h-full justify-center items-center py-5 px-0">
        <img
          className="max-h-full min-h-32 block"
          src={`${LogoUrl}`}
          alt={`${brandName}`}
        />
        <span className="pl-1 font-extrabold text-2xl ">{`${brandName}`}</span>
      </div>
    </div>
  );s
}
