import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <h1 className="text-4xl font-bold">Page introuvable</h1>
      <Link
        href={"/"}
        className="animate-pulse text-2xl pt-2 px-4 bg-black text-white rounded-xl"
      >
        Retourner au menu principal
      </Link>
    </div>
  );
}
