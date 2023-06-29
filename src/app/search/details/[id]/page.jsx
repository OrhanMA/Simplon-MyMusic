import React from "react";
import { getSpotifyAuthToken } from "../../../api/fetchFunction";
import GetInfoDetail from "@/components/GetInfoDetail";
export default async function Page() {
  const token = await getSpotifyAuthToken();
  return (
    <div>
      <GetInfoDetail token={token} />
    </div>
  );
}
