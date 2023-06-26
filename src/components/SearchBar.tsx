"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

export default function SearchBar() {
  const inputRef = useRef();
  const router = useRouter();
  const [selection, SetSelection] = useState("");
  function handleSelection(e) {
    // console.log(e.target.value);
    SetSelection(e.target.value);
    console.log(selection);
  }
  return (
    <div className="flex items-center gap-6">
      <select
        defaultValue=""
        onChange={handleSelection}
        name="search"
        id="search"
      >
        <option value="">Catégorie</option>
        <option value="artist">Artist</option>
        <option value="playlist">Playlist</option>
        <option value="album">Album</option>
        <option value="track">Track</option>
        <option value="show">Show</option>
      </select>
      <input
        ref={inputRef}
        className="border-2 py-2 px-4 rounded-lg text-sm"
        type="text"
        name="search"
        id="search"
        placeholder="Kaarism..."
      />
      <button
        onClick={() => {
          if (inputRef.current.value) {
            console.log(inputRef.current.value);
            router.push(
              `/search?q=${inputRef.current.value}&type=${selection}&market=FR&offset=0`
            );
          } else {
            alert("t'as rien écrit poto");
            console.log("t'as rien écrit poto");
          }
        }}
        className="py-2 px-4 rounded-lg bg-neutral-800 text-white  "
      >
        Rechercher
      </button>
    </div>
  );
}
