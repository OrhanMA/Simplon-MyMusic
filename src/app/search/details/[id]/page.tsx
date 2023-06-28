import React from "react";
import { getSpotifyAuthToken } from "../../../api/fetchFunction";
import GetInfoDetail from "@/components/GetInfoDetail";
export default async function Page() {
  const token = await getSpotifyAuthToken();
  return (
    <div>
      {/* Mettre ici le composant qui va récupérer l'url en use client en lui passant le token en props. Ce composant fetch l'api en utilisant la fonction cliente et passe la data en props au composant qui sera responsable de l'affichage du détail de l'image */}
      <GetInfoDetail token={token} />
    </div>
  );
}
