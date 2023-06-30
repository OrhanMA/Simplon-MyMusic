import React from "react";
import SearchResults from "../../components/SearchResults";
import { getSpotifyAuthToken } from "../api/fetchFunction";
export default async function Page() {
  const token = await getSpotifyAuthToken();
  return (
    <div>
      <SearchResults token={token} />
    </div>
  );
}
