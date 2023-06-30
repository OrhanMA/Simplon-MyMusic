"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import Modal from "@/components/Modal";

export default function SearchBar() {
  const inputRef = useRef();
  const router = useRouter();
  const [selection, SetSelection] = useState("");
  function handleSelection(e) {
    // console.log(e.target.value);
    SetSelection(e.target.value);
    console.log(selection);
  }
  // console.log(inputRef);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex text-sm items-center gap-6">
      <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
      <select
        className="focus:outline-none w-2/3 text-center focus:border-2 hover:text-green-500 hover:duration-200 border hover:border-green-500 text-black p-2 font-medium rounded-md  border-neutral-700"
        defaultValue="artist"
        onChange={handleSelection}
        name="search"
        id="search"
      >
        <option value="artist">Artist</option>
        <option value="playlist">Playlist</option>
        <option value="album">Album</option>
        <option value="track">Track</option>
        <option value="show">Show</option>
      </select>
      <input
        ref={inputRef}
        className="focus:outline-green-500 focus:duration-200 w-2/3 text-center border py-2 px-4 rounded-lg text-sm text-black border-neutral-700"
        type="text"
        name="search"
        id="search"
        placeholder="Kaarism..."
      />
      <button
        onClick={() => {
          if (inputRef.current.value) {
            console.log(inputRef.current.value);
            if (!selection) {
              router.push(
                `/search?q=${inputRef.current.value}&type=artist&market=FR&offset=0`
              );
            } else {
              router.push(
                `/search?q=${inputRef.current.value}&type=${selection}&market=FR&offset=0`
              );
            }
          } else {
            // alert("t'as rien écrit poto");
            // console.log("t'as rien écrit poto");
            openModal();
          }
        }}
        className="w-2/3 hover:bg-green-500  hover:duration-200  py-2 px-4 rounded-lg bg-neutral-800 border dark:border-0 border-white text-white  "
      >
        Rechercher
      </button>
    </div>
  );
}
