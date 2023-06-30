import fetchSpotifyApi from "./api/fetchFunction";
import CategoriesCard from "@/components/CategoriesCard";
import Link from "next/link";
export default async function Home() {
  const fetch = await fetchSpotifyApi("browse/categories?country=FR&offset=0");
  // console.log(fetch);

  const categories = fetch.categories;
  const list = categories.items;
  // console.log(list[0]);
  return (
    <div className="flex flex-col gap-y-12 items-center ">
      <h1 className="text-4xl font-bold hover:text-green-500 hover:duration-150">
        Catégories
      </h1>
      <ul className="w-full flex justify-evenly flex-wrap gap-y-12 gap-x-6">
        {list.map((playlist) => {
          return (
            <div
              className="w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/5 2xl:w-1/6 p-6 rounded-xl gap-y-6 bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-50 hover:bg-white hover:border-2 hover:scale-105 hover:border-green-400 hover:duration-200 hover:text-green-500 flex flex-col items-center"
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
                className=" hover:underline"
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
