import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Header() {
  return (
    <div className="relative h-10 mb-10">
      <div className="fixed mb-10 bg-white border-b-2 shadow top-0 flex justify-between p-6 items-center min-w-full">
        <Image
          src={"/assets/icons/icon-music.png"}
          width={32}
          height={32}
          alt="music icon"
        ></Image>
        <nav className="text-lg md:text-xl font-bold flex items-center gap-6">
          <Link href={"/"}>Catégories</Link>
          <Link href={"/featured"}>Featured</Link>
          <Link href={"/new-releases"}>Nouvelles sorties</Link>
        </nav>
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
