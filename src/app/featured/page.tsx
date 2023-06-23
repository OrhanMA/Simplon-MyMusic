import React from "react";
import fetchSpotifyApi from "../api/fetchFunction";
import FeaturedCard from "@/components/FeaturedCard";
import Link from "next/link";

export default async function Page() {
  const fetch = await fetchSpotifyApi(
    "browse/featured-playlists?country=FR&offset=0"
  );
  const message = await fetch.message;
  const playlists = await fetch.playlists.items;
  // console.log(playlists[0]);

  return (
    <div className="min-w-screen flex flex-col items-center gap-12 pt-12">
      <h1 className="text-4xl font-bold mb-10">{message}</h1>
      <ul className="w-full justify-evenly flex flex-wrap gap-y-12 gap-x-6">
        {playlists.map((playlist) => {
          return (
            <div
              className="flex flex-col items-center text-center gap-y-6 w-1/2  sm:w-1/3 md:w-1/4 lg:w-1/5 p-6 rounded-xl bg-neutral-900"
              key={playlist.id}
            >
              <Link
                href={`/featured/playlist/${playlist.name}?id=${playlist.id}`}
              >
                <FeaturedCard playlist={playlist} />
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
