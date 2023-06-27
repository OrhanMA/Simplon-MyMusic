import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ResultPlaylistCard({ playlist }) {
  return (
    <div className="flex items-center gap-6">
      {playlist.images.length > 0 ? (
        <Image
          className="aspect-square"
          src={playlist.images[0].url}
          width={150}
          height={150}
          alt={`${playlist.name} profile picture`}
        ></Image>
      ) : (
        <div className="bg-gray-800 flex items-center justify-center w-[150px] w-[150px] aspect-square">
          <p className="text-4xl">?</p>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold">{playlist.name}</p>
        <p className="text-xl">{playlist.owner.display_name}</p>
        <p>{playlist.description}</p>
        <Link
          className="text-green-500 hover:underline"
          href={playlist.external_urls.spotify}
        >
          Listen on spotify
        </Link>
      </div>
    </div>
  );
}
