import fetchSpotifyApi from "./api/fetchFunction";
import CategoriesCard from "@/components/CategoriesCard";
import Link from "next/link";
export default async function Home() {
  const fetch = await fetchSpotifyApi("browse/categories?country=FR&offset=0");
  const categories = fetch.categories;
  const list = categories.items;
  console.log(list[0]);
  return (
    <div className="flex flex-col gap-y-12 pt-10 items-center ">
      <h1 className="text-4xl font-bold">Catégories</h1>
      <ul className="w-full flex justify-evenly flex-wrap gap-y-12 gap-x-6">
        {list.map((playlist) => {
          return (
            <div
              className="w-1/4 p-6 rounded-xl gap-y-6 bg-neutral-900 flex flex-col items-center"
              key={playlist.id}
            >
              <li className="cursor-pointer flex flex-col items-center gap-4 text-center">
                <CategoriesCard playlist={playlist}></CategoriesCard>
              </li>
              <Link
                href={{
                  pathname: "/playlist",
                  query: { id: playlist.id },
                }}
              >
                See more
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
