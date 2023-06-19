import Image from "next/image";
import React from "react";
export default function Header() {
  return (
    <div className="relative mb-32">
      <div className="fixed mb-10 bg-white border-b-2 shadow top-0 flex justify-between p-6 items-center min-w-full">
        <Image
          src={"/assets/icons/icon-music.png"}
          width={32}
          height={32}
          alt="music icon"
        ></Image>
        <input
          className="border-2 p-1 rounded-xl pl-2 md:pl-4 md:w-1/3 lg:w-2/3"
          type="search"
          placeholder="Search..."
        />
        <Image
          src={"/assets/icons/icon-library.png"}
          width={32}
          height={32}
          alt="music library icon"
        ></Image>
      </div>
    </div>
  );
}
