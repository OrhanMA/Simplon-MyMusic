import React from "react";
import fetchSpotifyApi from "../api/fetchFunction";
import AlbumCard from "../../components/AlbumCard";
export default async function Page() {
  const fetch = await fetchSpotifyApi("browse/new-releases");
  const albums = fetch.albums;
  const items = albums.items;
  return (
    <div className="flex flex-col items-center gap-y-12 mt-10">
      <h1 className="font-bold text-4xl">Nouvelles sorties</h1>
      <ul className="w-full flex justify-evenly flex-wrap gap-y-12 gap-x-6">
        {items.map((album) => {
          return (
            <div
              className="w-1/2 md:w-1/3 lg:w-1/4 p-6 rounded-xl gap-y-6 bg-neutral-900 flex flex-col items-center"
              key={album.id}
            >
              <li className="cursor-pointer flex flex-col items-center gap-4 text-center">
                <AlbumCard album={album}></AlbumCard>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
