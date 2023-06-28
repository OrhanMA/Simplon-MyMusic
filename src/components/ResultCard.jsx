import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeartCirclePlus } from "react-icons/fa6";

export default function ResultCard({ type, data, img }) {
  return (
    <div className="flex items-center gap-6">
      <div>
        {img.images.length > 0 ? (
          <Image
            src={img.images[0].url}
            width={200}
            height={200}
            alt={`${data.name} profile picture`}
          ></Image>
        ) : (
          <div className="bg-gray-800 flex items-center justify-center w-[150px] h-[150px] aspect-square">
            <p className="text-4xl">?</p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <p className="text-2xl font-bold">{data.name}</p>
          {type === "artist" && (
            <>
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
            </>
          )}
          {type === "album" && (
            <>
              <p className="text-xl">{data.artists[0].name}</p>
              <p>Sortie: {data.release_date}</p>
              <p>{data.total_tracks} sons</p>
            </>
          )}
          {type === "playlist" && (
            <>
              <p className="text-xl">{data.owner.display_name}</p>
              <p>{data.description}</p>
            </>
          )}
          {type === "track" && (
            <>
              <p className="text-xl font-bold">{data.artists[0].name}</p>
              <p>{formatMilliseconds(data.duration_ms)}</p>
              <p>Sortie: {data.album.release_date}</p>
            </>
          )}
          {type === "show" && (
            <>
              {data.publisher !== data.name && (
                <p className="text-xl font-bold">{data.publisher}</p>
              )}
              <p className="text-lg">{data.total_episodes} episodes</p>
            </>
          )}
        </div>
        <div className="flex items-center gap-12">
          <Link
            className="text-green-500 hover:underline"
            href={data.external_urls.spotify}
          >
            Open on Spotify
          </Link>
          <FaHeartCirclePlus className="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

function formatMilliseconds(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
