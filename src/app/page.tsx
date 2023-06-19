export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl mb-10">
        Emportez votre musique{" "}
        <span className="underline text-purple-500">partout</span> avec MyMusic
        Premium:
      </h1>
      <ul className="flex flex-col gap-6 p-8 rounded-lg text-lg font-medium text-white bg-purple-400">
        <li className="border-b-2 border-gray-150 pb-6">
          Un son d'excellente qualité
        </li>
        <li className="border-b-2 border-gray-150 pb-6">
          Téléchargez et emporter votre musique où que vous alliez
        </li>
        <li className="border-b-2 border-gray-150 pb-6">
          La musique se partage: écoutez vos titres préférés grâces aux sessions
          d'écoutes
        </li>
        <li className="border-b-2 border-gray-150 pb-6">
          Likes illimités, playlists illimitées
        </li>
      </ul>
      <p className="text-2xl font-bold my-14 underline decoration-purple-500 underline-offset-8">
        30 jours d'essai offerts!
      </p>
    </div>
  );
}
