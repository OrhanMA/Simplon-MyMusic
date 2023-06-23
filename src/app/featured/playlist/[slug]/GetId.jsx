"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Playlist from "./Playlist";

export default async function GetId() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);
  return (
    <div>
      <Playlist id={id}></Playlist>
    </div>
  );
}
