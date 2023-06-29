"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { fetchDetailsClient } from "@/app/api/fetchFunction";
import DetailTop from "@/components/DetailTop";
import DetailBottom from "@/components/DetailBottom";
export default async function GetInfoDetail({ token }) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  // const response = await fetchTrackDetailsClient(token, id);
  const response = await fetchDetailsClient(token, id, type);
  // console.log(response);

  return (
    <div className="w-full flex flex-col gap-y-12 justify-center items-center">
      <DetailTop data={response} type={type} />
      <DetailBottom data={response} type={type} />
    </div>
  );
}
