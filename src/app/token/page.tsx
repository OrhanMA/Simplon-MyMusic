import React from "react";
import { getToken } from "../api/spotify/route";

export default async function Page() {
  const token = getToken();
  return (
    <div>
      <h1>Spotify Web Playback SDK Quick Start</h1>
      <p>{token}</p>
    </div>
  );
}
