import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Music = ({ musicPlaylistItems, scrollItems }) => {
  const listHeaderTextStyles = {
    marginBottom: '.5rem',
    fontWeight: 300,
  };

  const itemContainerStyles = {
    display: 'grid',
    gridTemplateColumns: '5% 90% 5%',
    gridTemplateRows: '1fr',
  };

  const itemStyles = {
    width: '320px',
    marginRight: '1rem',
    paddingBottom: '1rem',
    borderRadius: '5px',
    backgroundColor: '#101018',
  };

  return (
    <>
      <div className="playlist-header">
        <h2 style={listHeaderTextStyles}>Music</h2>
      </div>
      <div className="playlist-items-container" style={itemContainerStyles}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'inherit' }}>
          <MdKeyboardArrowLeft
            style={{ cursor: 'pointer' }}
            id="arrow-left-music"
            color="#fff"
            fontSize="5rem"
            onClick={(e) => scrollItems(e)}
          />
        </div>
        <div className="playlist-videos" style={{ display: 'flex', overflow: 'hidden' }}>
          {musicPlaylistItems.map((playlist) => (
            <div key={playlist.snippet.resourceId.videoId} style={itemStyles}>
              <div>
                <img src={playlist.snippet.thumbnails.medium.url} alt="Thumbnail" />
              </div>
              <div style={{ padding: '.5rem' }}>
                <div>{playlist.snippet.title}</div>
                <div>{playlist.snippet.publishedAt}</div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', zIndex: 1, backgroundColor: 'inherit' }}
        >
          <MdKeyboardArrowRight
            style={{ cursor: 'pointer' }}
            id="arrow-right-music"
            color="#fff"
            fontSize="5rem"
            onClick={(e) => scrollItems(e)}
          />
        </div>
      </div>
    </>
  );
};

export default Music;
