"use client";
import { useSearchParams } from "next/navigation";
import { fetchClientSpotifyApi } from "../app/api/fetchFunction";
import ResultCard from "@/components/ResultCard";
import Link from "next/link";
export default async function SearchResults({ token }) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const typeString = type + `s`;
  const query = searchParams.get("q");
  const response = await fetchClientSpotifyApi(token, type, query);
  console.log(response);

  return (
    <div className="w-full flex flex-col gap-y-12 items-center">
      <ul className="w-full flex flex-col lg:flex-row lg:flex-wrap gap-6 justify-center lg:justify-evenly items-center">
        {response[typeString].items.map((item) => (
          <li className="w-2/3 lg:w-1/3 my-6" key={item.id}>
            <Link
              href={`/search/details/detailPage?id=${item.id}&type=${type}`}
            >
              <ResultCard
                type={type}
                data={item}
                img={type === "track" ? item.album : item}
              ></ResultCard>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
