"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { fetchTrackDetailsClient } from "@/app/api/fetchFunction";
import {
  BsExplicitFill,
  BsExplicit,
  BsFillHandThumbsUpFill,
} from "react-icons/bs";

export default async function GetInfoDetail({ token }) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  const response = await fetchTrackDetailsClient(token, id);
  // console.log(response);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex gap-12 flex-col md:flex-row items-center ">
        <Image
          src={response.album.images[0].url}
          width={250}
          height={250}
          alt={`${response.name} ${type} picture`}
        ></Image>
        <div className="flex flex-col items-center gap-12 justify-center text-center">
          <div className="flex flex-col gap-y-6">
            <h1 className="text-4xl font-bold">{response.name}</h1>
            <h2 className="text-3xl font-semibold">
              {response.artists[0].name}
            </h2>
          </div>
          <div className="flex justify-start gap-6 items-center">
            <p className="text-xl">
              Durée {formatMilliseconds(response.duration_ms)}
            </p>
            {response.explicit == "true" ? <BsExplicitFill /> : <BsExplicit />}
            <div className="flex gap-4 items-center">
              <BsFillHandThumbsUpFill />
              <p className="text-xl">{response.popularity}%</p>
            </div>
            <Link
              className="text-green-500 hover:underline"
              href={response.external_urls.spotify}
            >
              Listen on Spotify
            </Link>
          </div>
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
