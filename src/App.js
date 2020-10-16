import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import youtubeService from './services/youtube';
import Header from './components/Header';
import Playlists from './playlists/Playlists';
import Player from './components/Player';
import './App.css';

const App = () => {
  const [playlists, setPlaylists] = useState([]);
  const [codingPlaylistItems, setCodingPlaylistItems] = useState([]);
  const [musicPlaylistItems, setMusicPlaylistItems] = useState([]);

  useEffect(() => {
    const getPlaylists = async () => {
      const playlistsResponse = await youtubeService.getAllPlaylists();
      setPlaylists(
        playlists
          .concat(playlistsResponse)
          .map((item) => ({ id: item.id, title: item.snippet.title }))
      );
    };
    getPlaylists();
  }, []);

  useEffect(() => {
    const getItems = async () => {
      const codingPlaylistId = playlists[0] ? playlists[0].id : null;
      const musicPlaylistId = playlists[1] ? playlists[1].id : null;
      const codingPlaylistTitle = playlists[0] ? playlists[0].title : null;
      const musicPlaylistTitle = playlists[1] ? playlists[1].title : null;

      const musicItems = await youtubeService.getPlaylistItems(codingPlaylistId);
      const codingItems = await youtubeService.getPlaylistItems(musicPlaylistId);

      const updatedMusicItems = musicItems.map((item) => ({ ...item, title: musicPlaylistTitle }));
      const updatedCodingItems = codingItems.map((item) => ({
        ...item,
        title: codingPlaylistTitle,
      }));
      setCodingPlaylistItems(codingPlaylistItems.concat(updatedCodingItems));
      setMusicPlaylistItems(musicPlaylistItems.concat(updatedMusicItems));
    };
    getItems();
  }, [playlists]);

  const scrollItems = (e, playlist) => {
    if (e.target.id === 'arrow-right-music') {
      const firstItem = musicPlaylistItems[0];
      setMusicPlaylistItems(musicPlaylistItems.filter((item) => item.id !== firstItem.id));
      setMusicPlaylistItems((musicPlaylistItems) => [...musicPlaylistItems, firstItem]);
    }
    
    if (e.target.id === 'arrow-left-music') {
      const lastItem = musicPlaylistItems[musicPlaylistItems.length - 1];
      setMusicPlaylistItems(musicPlaylistItems.filter((item) => item.id !== lastItem.id));
      setMusicPlaylistItems((musicPlaylistItems) => [lastItem, ...musicPlaylistItems]);
    }

    if (e.target.id === 'arrow-right-coding') {
      const firstItem = codingPlaylistItems[0];
      console.log('first', firstItem.snippet.title);
      setCodingPlaylistItems(codingPlaylistItems.filter((item) => item.id !== firstItem.id));
      setCodingPlaylistItems((codingPlaylistItems) => [...codingPlaylistItems, firstItem]);
    }


    if (e.target.id === 'arrow-left-coding') {
      const lastItem = codingPlaylistItems[codingPlaylistItems.length - 1];
      console.log('last', lastItem.snippet.title);
      setCodingPlaylistItems(codingPlaylistItems.filter((item) => item.id !== lastItem.id));
      setCodingPlaylistItems((codingPlaylistItems) => [lastItem, ...codingPlaylistItems]);
    }
  };

  // const scrollItemsLeft = (playlist) => {
  //   if (playlist === 'music') {
  //     const lastItem = musicPlaylistItems[musicPlaylistItems.length - 1];
  //     setMusicPlaylistItems(musicPlaylistItems.filter((item) => item.id !== lastItem.id));
  //     setMusicPlaylistItems((musicPlaylistItems) => [lastItem, ...musicPlaylistItems]);
  //   } else {
  //     const firstItem = codingPlaylistItems[0];
  //     setCodingPlaylistItems(codingPlaylistItems.filter((item) => item.id !== firstItem.id));
  //     setCodingPlaylistItems((codingPlaylistItems) => [...codingPlaylistItems, firstItem]);
  //   }
  // }

  return (
    <div className="app">
      <div className="content">
        <Header />

        <Switch>
          <Route path="/video/:id">
            <Player />
          </Route>
          <Route path="/">
            <Playlists
              scrollItems={scrollItems}
              codingPlaylistItems={codingPlaylistItems}
              musicPlaylistItems={musicPlaylistItems}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
