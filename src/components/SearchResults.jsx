"use client";
import { useSearchParams } from "next/navigation";
import { fetchClientSpotifyApi } from "../app/api/fetchFunction";
// import { useState } from "react";
import ResultCard from "@/components/ResultCard";
export default async function SearchResults({ token }) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const typeString = type + `s`;
  const query = searchParams.get("q");
  // const [res, setRes] = useState([]);
  const response = await fetchClientSpotifyApi(token, type, query);

  console.log(response);

  return (
    <div className="w-full flex flex-col gap-y-12 items-center">
      <ul className="w-full flex flex-col lg:flex-row lg:flex-wrap gap-6 justify-center lg:justify-evenly items-center">
        {response[typeString].items.map((item) => (
          <li className="w-2/3 lg:w-1/3 my-6" key={item.id}>
            <ResultCard type={type} data={item}></ResultCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
