import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function ResultTrackCard({ track }) {
  return (
    <div className="flex items-center gap-6">
      {track.album.images.length > 0 ? (
        <Image
          className="aspect-square"
          src={track.album.images[0].url}
          width={150}
          height={150}
          alt={`${track.name} profile picture`}
        ></Image>
      ) : (
        <div className="bg-gray-800 flex items-center justify-center w-[150px] w-[150px] aspect-square">
          <p className="text-4xl">?</p>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold">{track.name}</p>
        <p className="text-xl font-bold">{track.artists[0].name}</p>
        <p>{(track.duration_ms / 1000 / 60).toFixed(2)} minutes</p>
        <p>Sortie: {track.album.release_date}</p>
        <Link
          className="text-green-500 hover:underline"
          href={track.external_urls.spotify}
        >
          Listen on Spotify
        </Link>
      </div>
    </div>
  );
}
