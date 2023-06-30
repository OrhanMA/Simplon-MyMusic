"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { fetchDetailsClient } from "@/app/api/fetchFunction";
import DetailTop from "@/components/DetailTop";
import DetailBottom from "@/components/DetailBottom";
import Link from "next/link";
export default async function GetInfoDetail({ token }) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  // const response = await fetchTrackDetailsClient(token, id);
  const response = await fetchDetailsClient(token, id, type);
  // console.log(response);

  return (
    <div className="w-full flex flex-col gap-y-12 justify-center items-center">
      {response ? (
        <>
          <DetailTop data={response} type={type} />
          <DetailBottom data={response} type={type} />
        </>
      ) : (
        <div className="flex flex-col items-center gap-y-12">
          <h1 className="text-3xl font-bold">
            Page inaccessible à cause de requêtes trop nombreuses
          </h1>
          <Link
            href={"/"}
            className="py-2 px-4 border w-1/2 text-center hover:border-green-500 hover:text-green-500"
          >
            Cliquez ici pour retourner à la page principale
          </Link>
        </div>
      )}
    </div>
  );
}
