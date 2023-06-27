"use client";
import { useSearchParams } from "next/navigation";
import { fetchClientSpotifyApi } from "../api/fetchFunction";
import { useEffect, useState } from "react";
import ArtistCard from "@/components/ArtistCard";
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

      <ul className="w-full flex flex-wrap items-center justify-evenly">
        {response.artists.items.map((artist) => (
          <li className="w-2/5 my-6" key={artist.id}>
            <ArtistCard artist={artist}></ArtistCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
