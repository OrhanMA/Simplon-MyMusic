import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function ResultShowCard({ show }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full flex justify-between gap-12 items-center">
        <div className="w-1/3">
          {show.images.length > 0 ? (
            <Image
              className="aspect-square"
              src={show.images[0].url}
              width={150}
              height={150}
              alt={`${show.name} profile picture`}
            ></Image>
          ) : (
            <div className="bg-gray-800 flex items-center justify-center w-[150px] w-[150px] aspect-square">
              <p className="text-3xl">?</p>
            </div>
          )}
        </div>
        <div className="w-2/3 flex flex-col gap-4">
          <p className="text-xl font-bold">{show.name}</p>
          {show.publisher !== show.name && (
            <p className="text-xl font-bold">{show.publisher}</p>
          )}
          <p className="text-lg">{show.total_episodes} episodes</p>
          <Link
            className="text-green-500 hover:underline"
            href={show.external_urls.spotify}
          >
            Listen on Spotify
          </Link>
        </div>
      </div>
      <p className="text-gray-400">{show.description}</p>
    </div>
  );
}
