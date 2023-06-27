"use client";
import { useSearchParams } from "next/navigation";
import { fetchClientSpotifyApi } from "../api/fetchFunction";
import { useEffect, useState } from "react";
import ArtistCard from "@/components/ArtistCard";
import ResultAlbumCard from "@/components/ResultAlbumCard";
import ResultTrackCard from "@/components/ResultTrackCard";
import ResultShowCard from "@/components/ResultShowCard";
import ResultPlaylistCard from "@/components/ResultPlaylistCard";
export default async function SearchResults({ token }) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const query = searchParams.get("q");
  const [res, setRes] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetchClientSpotifyApi(token, type, query);
  //     setRes(response);
  //     localStorage.setItem("searchResults", JSON.stringify(response));
  //   };

  //   fetchData();
  // }, [token, query, type]);

  const response = await fetchClientSpotifyApi(token, type, query);

  console.log(response);
  // console.log(response.artists.items[0]);

  // const storedResults = JSON.parse(localStorage.getItem("searchResults")) || [];

  return (
    <div className="w-full flex flex-col gap-y-12 pt-10 items-center">
      {/* <p>{token}</p>
      <p>{type}</p>
      <p>{query}</p> */}
      {type == "artist" && (
        <ul className="w-full flex flex-wrap items-center justify-evenly">
          {response.artists.items.map((artist) => (
            <li className="w-2/5 my-6" key={artist.id}>
              <ArtistCard artist={artist}></ArtistCard>
            </li>
          ))}
        </ul>
      )}
      {type == "album" && (
        <ul className="w-full flex flex-wrap items-center justify-evenly">
          {response.albums.items.map((album) => (
            <li className="w-2/5 my-6" key={album.id}>
              <ResultAlbumCard album={album}></ResultAlbumCard>
            </li>
          ))}
        </ul>
      )}
      {type == "track" && (
        <ul className="w-full flex flex-wrap items-center justify-evenly">
          {response.tracks.items.map((track) => (
            <li className="w-2/5 my-6" key={track.id}>
              <ResultTrackCard track={track}></ResultTrackCard>
            </li>
          ))}
        </ul>
      )}
      {type == "show" && (
        <ul className="w-full flex flex-col items-center justify-evenly">
          {response.shows.items.map((show) => (
            <li className="w-2/5 my-6" key={show.id}>
              <ResultShowCard show={show}></ResultShowCard>
            </li>
          ))}
        </ul>
      )}
      {type == "playlist" && (
        <ul className="w-full flex flex-col gap-y-24 items-center justify-evenly">
          {response.playlists.items.map((playlist) => (
            <li className="w-2/5 my-6" key={playlist.id}>
              <ResultPlaylistCard playlist={playlist}></ResultPlaylistCard>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
