"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  fetchDetailsClient,
  fetchTrackDetailsClient,
} from "@/app/api/fetchFunction";
import {
  BsExplicitFill,
  BsExplicit,
  BsFillHandThumbsUpFill,
} from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { AiOutlineCopyright } from "react-icons/ai";
import {
  formatMilliseconds,
  formatNumber,
  transformDate,
} from "../../src/sourceFunctions/source";

export default async function GetInfoDetail({ token }) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  // const response = await fetchTrackDetailsClient(token, id);
  const response = await fetchDetailsClient(token, id, type);
  console.log(response);

  return (
    <div className="w-full flex flex-col gap-y-12 justify-center items-center">
      <div className="flex gap-12 flex-col md:flex-row items-center ">
        <Image
          src={
            type === "track"
              ? response.album.images[0].url
              : response.images[0].url
          }
          width={250}
          height={250}
          alt={`${response.name} ${type} picture`}
        ></Image>
        <div className="flex flex-col items-center gap-12 justify-center text-center">
          <div className="flex flex-col gap-y-6">
            <h1 className="text-4xl font-bold">{response.name}</h1>

            <h2 className="text-3xl font-semibold">
              {type == "track" && <>{response.artists[0].name}</>}
              {type == "show" && (
                <div className="text-xl">
                  {`Par ${response.publisher} - ${response.total_episodes} épisodes`}
                </div>
              )}
              {type == "artist" && (
                <>{formatNumber(response.followers.total)} fans / mois</>
              )}
              {type == "playlist" && (
                <div className="w-full justify-center flex items-center gap-4">
                  {formatNumber(response.followers.total)}
                  <FaHeart />
                </div>
              )}
              {type == "album" && (
                <div className="flex flex-col gap-y-6">
                  <p className="text-2xl">
                    {transformDate(response.release_date)}
                  </p>
                  <p className="text-2xl">{response.total_tracks} sons</p>
                  <p className="text-lg flex items-center gap-2">
                    {response.label} <AiOutlineCopyright />
                  </p>
                </div>
              )}
            </h2>
          </div>
          <div className="flex justify-start gap-6 items-center">
            {type == "track" && (
              <p className="text-xl flex items-center gap-2">
                Durée {formatMilliseconds(response.duration_ms)}
                {response.explicit == "true" ? (
                  <BsExplicitFill />
                ) : (
                  <BsExplicit />
                )}
              </p>
            )}
            <div className="flex gap-4 items-center">
              {(type == "artist" || type == "track" || type == "album") && (
                <>
                  <BsFillHandThumbsUpFill />
                  <p className="text-xl">{response.popularity}%</p>
                </>
              )}
            </div>
            <Link
              className="text-green-500 hover:underline"
              href={response.external_urls.spotify}
            >
              Listen on Spotify
            </Link>
          </div>
          {type == "artist" && (
            <p className="text-sm text-gray-500">
              {response.genres
                .map((genre) => genre.charAt(0).toUpperCase() + genre.slice(1))
                .join(", ")}
            </p>
          )}
        </div>
      </div>
      {(type == "playlist" || type == "album" || type == "show") && (
        <div className="w-full lg:w-2/3 flex flex-col gap-12">
          {(type == "playlist" || type == "show") && (
            <h3 className="text-2xl font-semibold">{response.description}</h3>
          )}
          {type == "show" && (
            <div className="flex items-center justify-evenly text-center">
              <p className="w-1/5">Épisodes</p>
              <p className="w-2/5">Description</p>
              <p className="w-1/5">Durée</p>
              <p className="w-1/5">Sortie</p>
            </div>
          )}
          <ul className="flex flex-col">
            {type == "show" ? (
              <>
                {response.episodes.items.map((episode) => {
                  return (
                    <li
                      className="h-[200px] text-ellipsis overflow-hidden my-6 gap-6 text-md font-bold flex items-center w-full justify-evenly border-b-2 border-b-neutral-50 pb-6 border-opacity-10"
                      key={episode.id}
                    >
                      <p className="w-1/5 text-sm sm:text-md text-start">
                        {episode.name}
                      </p>
                      <p className="w-2/5 text-start text-sm font-normal">
                        {episode.description}
                      </p>
                      <p className="w-1/5 text-end">
                        {formatMilliseconds(episode.duration_ms)}
                      </p>
                      <p className="w-1/5 text-end">
                        {transformDate(episode.release_date)}
                      </p>
                    </li>
                  );
                })}
              </>
            ) : (
              <>
                {response.tracks.items.map((song, index) => {
                  return (
                    <li
                      className="my-6 gap-4 text-md font-bold flex items-center w-full justify-evenly border-b-2 border-b-neutral-50 pb-6 border-opacity-10"
                      key={type === "playlist" ? song.track.id : song.id}
                    >
                      <p className="w-1/3 text-start">
                        {index + 1}.{" "}
                        {type === "playlist" ? song.track.name : song.name}
                      </p>
                      <p className="w-1/3 text-center">
                        {type === "playlist"
                          ? song.track.artists[0].name
                          : song.artists[0].name}
                      </p>
                      <p className="w-1/3 text-end">
                        {formatMilliseconds(
                          type === "playlist"
                            ? song.track.duration_ms
                            : song.duration_ms
                        )}
                      </p>
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
