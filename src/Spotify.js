 import axios from 'axios';

const CLIENT_ID = 'e6bf777da469400391ee8cf6e98dd2f5'; // Замени на свой Client ID
const SPOTIFY_API_URL = 'https://api.spotify.com/v1';

export const Spotify = {
  async getAccessToken() {
    const response = await fetch('https://accounts.spotify.com/authorize?' +
      new URLSearchParams({
        client_id: CLIENT_ID,
        response_type: 'token',
        redirect_uri: 'http://127.0.0.1:3000',
        scope: 'playlist-modify-public'
      }));
    const redirectUrl = response.url;
    window.location = redirectUrl;
  },

  async search(term, accessToken) {
    try {
      const response = await axios.get(`${SPOTIFY_API_URL}/search`, {
        params: {
          q: term,
          type: 'track',
          limit: 10,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data.tracks.items.map((track) => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      }));
    } catch (error) {
      console.error('Ошибка поиска в Spotify:', error);
      return [];
    }
  },
};
