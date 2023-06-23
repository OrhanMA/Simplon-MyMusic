import Image from "next/image";
import React from "react";

export default function CategoriesCard({ playlist }) {
  return (
    <div className="flex flex-col gap-y-6">
      <p className="text-xl font-bold">{playlist.name}</p>
      <Image
        className="my-4"
        src={playlist.icons[0].url}
        width={100}
        height={100}
        alt={playlist.name + "icon"}
      ></Image>
    </div>
  );
}
