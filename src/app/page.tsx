import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Link
        className=" pt-2 px-4 bg-black text-white"
        href={`https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_CLIENT_ID}&redirect_uri=http://localhost:3000/callback&response_type=code`}
      >
        Get auth code
      </Link>
    </div>
  );
}
