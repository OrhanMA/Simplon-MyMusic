import React from "react";
import Image from "next/image";

export default function AlbumCard({ album }) {
  return (
    <div>
      <div className="flex flex-col items-center gap-y-6">
        <Image
          src={album.images[0].url}
          width={200}
          height={200}
          alt={album.name + "icon"}
        ></Image>
        <p className="text-xl font-bold">{album.name}</p>
        <p className="text-xl font-bold">artiste: {album.artists[0].name}</p>
        <p className="text-md">Sorti le: {album.release_date}</p>
      </div>
    </div>
  );
}
