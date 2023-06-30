import axios from "axios";

const fetchSpotifyApi = async (url) => {
  const token = await getSpotifyAuthToken();

  if (token) {
    try {
      const response = await axios.get(process.env.SPOTIFY_BASE_URL + url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return null;
    }
  }
};
const fetchClientSpotifyApi = async (token, type, query) => {
  if (token) {
    try {
      const response = await axios.get(
        "https://api.spotify.com/v1/" +
          `search?q=${query}&type=${type}&market=FR&offset=0`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return null;
    }
  }
};
const fetchTrackDetailsClient = async (token, id) => {
  if (token) {
    try {
      const response = await axios.get(
        "https://api.spotify.com/v1/" + `tracks/${id}?market=FR`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return null;
    }
  }
};

const getSpotifyAuthToken = async () => {
  const options = {
    url: process.env.SPOTIFY_TOKEN_URL,
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.SPOTIFY_USER_ID + ":" + process.env.SPOTIFY_USER_SECRET
        ).toString("base64"),
    },
    data: "grant_type=client_credentials",
  };

  const fetchToken = async () => {
    try {
      const response = await axios.post(options.url, options.data, {
        headers: options.headers,
      });

      if (response.status === 200) {
        return response.data.access_token;
      }
    } catch (error) {
      return null;
    }
  };

  return fetchToken();
};

const fetchDetailsClient = async (token, id, type) => {
  if (token) {
    try {
      let url;
      if (type === "track") {
        url = `https://api.spotify.com/v1/tracks/${id}?market=FR`;
      } else if (type === "album") {
        url = `https://api.spotify.com/v1/albums/${id}?market=FR`;
      } else if (type === "artist") {
        url = `https://api.spotify.com/v1/artists/${id}`;
      } else if (type === "playlist") {
        url = `https://api.spotify.com/v1/playlists/${id}?market=FR`;
      } else if (type === "show") {
        url = `https://api.spotify.com/v1/shows/${id}?market=FR`;
      } else {
        throw new Error("Invalid type");
      }

      const response = await axios.get(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return null;
    }
  }
};
export default fetchSpotifyApi;
export {
  getSpotifyAuthToken,
  fetchClientSpotifyApi,
  fetchTrackDetailsClient,
  fetchDetailsClient,
};
