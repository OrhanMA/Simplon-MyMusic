import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ResultCard({ type, data }) {
  return (
    <div className="flex items-center gap-6">
      {data.album && (
        <div>
          {data.album.images.length > 0 ? (
            <Image
              className="aspect-square"
              src={data.album.images[0].url}
              width={150}
              height={150}
              alt={`${data.name} profile picture`}
            ></Image>
          ) : (
            <div className="bg-gray-800 flex items-center justify-center w-[150px] h-[150px] aspect-square">
              <p className="text-4xl">?</p>
            </div>
          )}
        </div>
      )}
      {data.images && (
        <div>
          {data.images.length > 0 ? (
            <Image
              src={data.images[0].url}
              width={150}
              height={150}
              alt={`${data.name} profile picture`}
            ></Image>
          ) : (
            <div className="bg-gray-800 flex items-center justify-center w-[150px] h-[150px] aspect-square">
              <p className="text-4xl">?</p>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col gap-4">
        {type === "artist" && (
          <div>
            <p className="text-2xl font-bold">{data.name}</p>
            <p>{data.followers.total} followers</p>
            {data.genres && (
              <p className="text-sm text-gray-500">
                {data.genres
                  .map(
                    (genre) => genre.charAt(0).toUpperCase() + genre.slice(1)
                  )
                  .join(", ")}
              </p>
            )}
          </div>
        )}
        {type === "album" && (
          <div>
            <p className="text-2xl font-bold">{data.name}</p>
            <p className="text-xl">{data.artists[0].name}</p>
            <p>Sortie: {data.release_date}</p>
            <p>{data.total_tracks} sons</p>
          </div>
        )}
        {type === "playlist" && (
          <div>
            <p className="text-2xl font-bold">{data.name}</p>
            <p className="text-xl">{data.owner.display_name}</p>
            <p>{data.description}</p>
          </div>
        )}
        {type === "track" && (
          <div>
            <p className="text-2xl font-bold">{data.name}</p>
            <p className="text-xl font-bold">{data.artists[0].name}</p>
            <p>{(data.duration_ms / 1000 / 60).toFixed(2)} minutes</p>
            <p>Sortie: {data.album.release_date}</p>
          </div>
        )}
        {type === "show" && (
          <div>
            <p className="text-xl font-bold">{data.name}</p>
            {data.publisher !== data.name && (
              <p className="text-xl font-bold">{data.publisher}</p>
            )}
            <p className="text-lg">{data.total_episodes} episodes</p>
          </div>
        )}
        <Link
          className="text-green-500 hover:underline"
          href={data.external_urls.spotify}
        >
          View profile on Spotify
        </Link>
      </div>
    </div>
  );
}
