import React from "react";
import Image from "next/image";
export default function FeaturedCard({ playlist }) {
  return (
    <>
      <h2 className="font-bold text-xl">{playlist.name}</h2>
      <Image
        className="my-6"
        src={playlist.images[0].url}
        width={300}
        height={300}
        alt={`${playlist.name} playlist photo`}
      ></Image>
      <p className="dark:text-neutral-300">{playlist.description}</p>
      <p>
        <span className="dark:text-neutral-300 mr-1 ">par:</span>
        {playlist.owner.display_name}
      </p>
    </>
  );
}
