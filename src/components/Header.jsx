import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { AiFillHome } from "react-icons/ai";
export default function Header() {
  return (
    <div className="relative mb-10 z-50">
      <div className="fixed mb-10 bg-neutral-900 text-white dark:text-black dark:bg-white border-b-2 shadow top-0 flex flex-col md:flex-row gap-6 justify-around p-4 items-center min-w-full">
        <nav className="flex items-center text-sm sm:text-md lg:text-lg xl:text-xl gap-4">
          <Link
            className="hover:text-green-500 hover:underline hover:duration-200"
            href={"/"}
          >
            <AiFillHome />
          </Link>
          <Link
            className="hover:text-green-500 hover:underline hover:duration-200"
            href={"/"}
          >
            Catégories
          </Link>
          <Link
            className="hover:text-green-500 hover:underline hover:duration-200"
            href={"/featured"}
          >
            Featured
          </Link>
          <Link
            className="hover:text-green-500 hover:underline hover:duration-200"
            href={"/new-releases"}
          >
            Sorties
          </Link>
        </nav>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
}
