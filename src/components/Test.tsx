"use client";
import { useSearchParams } from "next/navigation";

export default async function Test() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const token = await getAccessToken(code);
  const profile = await fetchProfile(token);
  // const topTracks = await getTopTracks(token);
  // console.log(topTracks.items);

  console.log(profile);

  return (
    <div className="flex flex-col gap-12">
      <p> AUTH CODE: {code}</p>
      <p>ACCES TOKEN: {token}</p>
      <div>
        <p>PROFILE:</p>
        <p>ID: {profile.id}</p>
        <p>
          EMAIL:
          {profile.email}
        </p>
        <p>
          NAME:
          {profile.display_name}
        </p>
      </div>
    </div>
  );
}

async function getAccessToken(authorizationCode) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = "http://localhost:3000/callback";

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basicAuth}`,
    },
    body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${redirectUri}`,
  });

  const data = await response.json();

  if (response.ok) {
    const accessToken = data.access_token;
    return accessToken;
  } else {
    // Handle error response
    throw new Error(data.error_description);
  }
}

async function fetchProfile(token: string): Promise<any> {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return await result.json();
}
