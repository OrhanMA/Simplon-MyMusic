"use client";
import React from "react";
import fetchSpotifyApi from "../api/fetchFunction";
import { useSearchParams } from "next/navigation";
export default async function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);
  const test = await fetchSpotifyApi(
    `/playlists/${id}/tracks?market=fr?offset=0`
  );
  console.log(test.data);

  return <div>yo</div>;
}
