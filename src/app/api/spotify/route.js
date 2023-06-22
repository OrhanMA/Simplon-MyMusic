import axios from "axios";

export async function getToken() {
  try {
    const URL = "https://accounts.spotify.com/api/token";
    const response = await axios.post(
      URL,
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return Promise.resolve(response.data.access_token);
  } catch (err) {
    return Promise.reject(error);
  }
}

getToken()
  .then((token) => {
    console.log("access token: " + token);
    return token;
  })
  .catch((error) => {
    console.log(error.message);
  });
