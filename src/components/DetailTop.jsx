import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import { AiOutlineCopyright } from "react-icons/ai";
import {
  BsExplicitFill,
  BsExplicit,
  BsFillHandThumbsUpFill,
} from "react-icons/bs";
import {
  formatMilliseconds,
  formatNumber,
  transformDate,
} from "../../src/sourceFunctions/source";
export default function DetailTop({ data, type }) {
  return (
    <>
      <div className="flex gap-12 flex-col md:flex-row items-center ">
        <Image
          src={type === "track" ? data.album.images[0].url : data.images[0].url}
          width={250}
          height={250}
          alt={`${data.name} ${type} picture`}
        ></Image>
        <div className="flex flex-col items-center gap-12 justify-center text-center">
          <div className="flex flex-col gap-y-6">
            <h1 className="text-4xl font-bold">{data.name}</h1>

            <h2 className="text-3xl font-semibold">
              {type == "track" && <>{data.artists[0].name}</>}
              {type == "show" && (
                <div className="text-xl">
                  {`Par ${data.publisher} - ${data.total_episodes} épisodes`}
                </div>
              )}
              {type == "artist" && (
                <>{formatNumber(data.followers.total)} fans / mois</>
              )}
              {type == "playlist" && (
                <div className="w-full justify-center flex items-center gap-4">
                  {formatNumber(data.followers.total)}
                  <FaHeart />
                </div>
              )}
              {type == "album" && (
                <div className="flex flex-col gap-y-6">
                  <p className="text-2xl">{transformDate(data.release_date)}</p>
                  <p className="text-2xl">{data.total_tracks} sons</p>
                  <p className="text-lg flex items-center gap-2">
                    {data.label} <AiOutlineCopyright />
                  </p>
                </div>
              )}
            </h2>
          </div>
          <div className="flex justify-start gap-6 items-center">
            {type == "track" && (
              <p className="text-xl flex items-center gap-2">
                Durée {formatMilliseconds(data.duration_ms)}
                {data.explicit == "true" ? <BsExplicitFill /> : <BsExplicit />}
              </p>
            )}
            <div className="flex gap-4 items-center">
              {(type == "artist" || type == "track" || type == "album") && (
                <>
                  <BsFillHandThumbsUpFill />
                  <p className="text-xl">{data.popularity}%</p>
                </>
              )}
            </div>
            <Link
              className="text-green-500 hover:underline"
              href={data.external_urls.spotify}
            >
              Listen on Spotify
            </Link>
          </div>
          {type == "artist" && (
            <p className="text-sm text-gray-500">
              {data.genres
                .map((genre) => genre.charAt(0).toUpperCase() + genre.slice(1))
                .join(", ")}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
