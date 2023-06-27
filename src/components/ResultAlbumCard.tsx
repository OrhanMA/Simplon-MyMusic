import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ResultAlbumCard({ album }) {
  return (
    <div className="flex items-center gap-6">
      {album.images.length > 0 ? (
        <Image
          className="aspect-square"
          src={album.images[0].url}
          width={150}
          height={150}
          alt={`${album.name} profile picture`}
        ></Image>
      ) : (
        <div className="bg-gray-800 flex items-center justify-center w-[150px] w-[150px] aspect-square">
          <p className="text-4xl">?</p>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold">{album.name}</p>
        <p className="text-xl">{album.artists[0].name}</p>
        <p>Sortie: {album.release_date}</p>
        <p>{album.total_tracks} sons</p>
        <Link
          className="text-green-500 hover:underline"
          href={album.external_urls.spotify}
        >
          Listen on spotify
        </Link>
      </div>
    </div>
  );
}
