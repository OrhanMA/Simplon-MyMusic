import React from "react";
import {
  formatMilliseconds,
  transformDate,
} from "../../src/sourceFunctions/source";
export default function DetailBottom({ data, type }) {
  return (
    <>
      {(type == "playlist" || type == "album" || type == "show") && (
        <div className="w-full lg:w-2/3 flex flex-col gap-12">
          {(type == "playlist" || type == "show") && (
            <>
              <h3 className="text-2xl font-semibold">{data.description}</h3>
            </>
          )}
          {type == "show" && (
            <div className="flex items-center justify-evenly text-center">
              <p className="w-1/5">Épisodes</p>
              <p className="w-2/5">Description</p>
              <p className="w-1/5">Durée</p>
              <p className="w-1/5">Sortie</p>
            </div>
          )}
          <ul className="flex flex-col">
            {type == "show" ? (
              <>
                {data.episodes.items.map((episode) => {
                  return (
                    <li
                      className="h-[200px] text-ellipsis overflow-hidden my-6 gap-6 text-md font-bold flex items-center w-full justify-evenly border-b-2 border-b-neutral-50 pb-6 border-opacity-10"
                      key={episode.id}
                    >
                      <p className="w-1/5 text-sm sm:text-md text-start">
                        {episode.name}
                      </p>
                      {data.description && (
                        <p className="w-2/5 text-start text-sm font-normal">
                          {episode.description}
                        </p>
                      )}
                      <p className="w-1/5 text-end">
                        {formatMilliseconds(episode.duration_ms)}
                      </p>
                      <p className="w-1/5 text-end">
                        {transformDate(episode.release_date)}
                      </p>
                    </li>
                  );
                })}
              </>
            ) : (
              <>
                {data.tracks.items.map((song, index) => {
                  return (
                    <li
                      className="my-6 gap-4 text-md font-bold flex items-center w-full justify-evenly border-b-2 border-b-neutral-50 pb-6 border-opacity-10"
                      key={type === "playlist" ? song.track.id : song.id}
                    >
                      <p className="w-1/3 text-start">
                        {index + 1}.
                        {type === "playlist" ? song.track.name : song.name}
                      </p>
                      <p className="w-1/3 text-center">
                        {type === "playlist"
                          ? song.track.artists[0].name
                          : song.artists[0].name}
                      </p>
                      <p className="w-1/3 text-end">
                        {formatMilliseconds(
                          type === "playlist"
                            ? song.track.duration_ms
                            : song.duration_ms
                        )}
                      </p>
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
