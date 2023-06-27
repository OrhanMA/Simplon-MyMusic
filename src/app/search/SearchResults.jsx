"use client";
import { useSearchParams } from "next/navigation";
import { fetchClientSpotifyApi } from "../api/fetchFunction";
import { useState } from "react";
import ResultCard from "@/components/ResultCard";
export default async function SearchResults({ token }) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const typeString = type + `s`;
  const query = searchParams.get("q");
  const [res, setRes] = useState([]);
  const response = await fetchClientSpotifyApi(token, type, query);

  console.log(response);

  return (
    <div className="w-full flex flex-col gap-y-12 pt-10 items-center">
      <ul className="w-full flex flex-wrap items-center justify-evenly">
        {response[typeString].items.map((item) => (
          <li className="w-2/5 my-6" key={item.id}>
            <ResultCard type={type} data={item}></ResultCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
