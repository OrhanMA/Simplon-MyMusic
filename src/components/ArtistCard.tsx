import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ArtistCard({ artist }) {
  return (
    <div className="flex items-center gap-6">
      {artist.images.length > 0 ? (
        <Image
          className="rounded-full aspect-square"
          src={artist.images[0].url}
          width={150}
          height={150}
          alt={`${artist.name} profile picture`}
        ></Image>
      ) : (
        <div className="bg-gray-800 flex items-center justify-center w-[150px] w-[150px] rounded-full aspect-square">
          <p className="text-4xl">?</p>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold">{artist.name}</p>
        <p>{artist.followers.total} followers</p>
        {artist.genres && (
          <p className="text-sm text-gray-500">
            {artist.genres
              .map((genre) => genre.charAt(0).toUpperCase() + genre.slice(1))
              .join(", ")}
          </p>
        )}
        <Link
          className="text-green-500 hover:underline"
          href={artist.external_urls.spotify}
        >
          View profile on Spotify
        </Link>
      </div>
    </div>
  );
}

// you have a number that looks like 123456789
// make it look like 123 456 789
// make any number more readable
