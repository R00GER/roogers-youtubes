import React from 'react';
import Coding from './Coding';
import Music from './Music';


const Playlists = ({ codingPlaylistItems, musicPlaylistItems, scrollItems }) => {
  return (
    <div className="playlist-container">
      
      <Coding codingPlaylistItems={codingPlaylistItems} scrollItems={scrollItems} />
      <Music musicPlaylistItems={musicPlaylistItems} scrollItems={scrollItems} />
    </div>
  );
};

export default Playlists;
