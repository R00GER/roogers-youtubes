import axios from 'axios';

const BASE_URL_PLAYLISTS = process.env.REACT_APP_BASE_URL_PLAYLISTS;
const BASE_URL_PLAYLIST_ITEMS = process.env.REACT_APP_BASE_URL_PLAYLIST_ITEMS;
const API_KEY = process.env.REACT_APP_API_KEY;

const getAllPlaylists = async () => {
  const response = await axios.get(`${BASE_URL_PLAYLISTS}${API_KEY}`);
  return response.data.items;
};

const getPlaylistItems = async (playlistId) => {
  // playlistId=PLMma5qV3eyB72HkjbE5bXaVq-YV_KwQd-&key=
  const response = await axios.get(`${BASE_URL_PLAYLIST_ITEMS}playlistId=${playlistId}&key=${API_KEY}`)
  return response.data.items;
}


export default { getAllPlaylists, getPlaylistItems };
