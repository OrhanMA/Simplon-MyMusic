import React from "react";
import fetchSpotifyApi from "../../../api/fetchFunction";
async function getData(id) {
  const fetch = await fetchSpotifyApi(`playlists/${id}/tracks`);
  return fetch;
}
export default async function Playlist({ id }) {
  const items = await getData(id).items;
  console.log(items[0]);

  return (
    <div>
      {/* ID IS: {id}
      <ul>
        {items.map((element) => {
          return (
            <div key={element.track.id}>
              <p>{element.track.name}</p>
              <p>{element.track.artists[0]}</p>
            </div>
          );
        })}
      </ul> */}
    </div>
  );
}
