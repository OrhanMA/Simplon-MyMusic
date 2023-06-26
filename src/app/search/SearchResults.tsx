"use client";

import { useSearchParams } from "next/navigation";
import { fetchClientSpotifyApi } from "../api/fetchFunction";
import { useEffect, useState } from "react";
export default async function SearchResults({ token }) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const query = searchParams.get("q");
  // const [results, setResults] = useState(null);

  useEffect(() => {
    const data = async () => {
      const res = await fetchClientSpotifyApi(token, type, query);
      console.log(res);
      // setResults(res);
    };
    data();
  }, [token, query, type]);

  return (
    <div className="flex flex-col gap-y-12 pt-10 items-center ">
      <p>{token}</p>
      <p>{type}</p>
      <p>{query}</p>
    </div>
  );
}
