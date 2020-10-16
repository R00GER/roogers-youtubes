import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdPlayArrow } from 'react-icons/md';

const Coding = ({ codingPlaylistItems, scrollItems }) => {
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [currentVideo, setCurrentVideo] = useState();

  const listHeaderTextStyles = {
    marginBottom: '.5rem',
    fontWeight: 300,
  };

  const itemContainerStyles = {
    display: 'grid',
    gridTemplateColumns: '5% 90% 5%',
    gridTemplateRows: '1fr',
    marginBottom: '2rem',
  };

  const itemStyles = {
    position: 'relative',
    width: '320px',
    marginRight: '1rem',
    paddingBottom: '1rem',
    borderRadius: '5px',
    backgroundColor: '#101018',
    cursor: 'pointer',
  };

  const itemPlayButtonStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    zIndex: 1,
  };

  const togglePlayButton = (e, id) => {
    const video = codingPlaylistItems.find((item) => item.id === id);
    setCurrentVideo(video);
    e.type === 'mouseenter' ? setShowPlayButton(true) : setShowPlayButton(false);
  };

  return (
    <>
      <div className="playlist-header">
        <h2 style={listHeaderTextStyles}>Coding</h2>
      </div>
      <div className="playlist-items-container" style={itemContainerStyles}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'inherit' }}>
          <MdKeyboardArrowLeft
            style={{ cursor: 'pointer' }}
            id="arrow-left-coding"
            color="#fff"
            fontSize="5rem"
            onClick={(e) => scrollItems(e)}
          />
        </div>
        <div className="playlist-videos" style={{ display: 'flex', overflow: 'hidden' }}>
          {codingPlaylistItems.map((item) => (
            <div
              key={item.id}
              style={itemStyles}
              onMouseEnter={(e) => togglePlayButton(e, item.id)}
              onMouseLeave={togglePlayButton}
            >
              <div style={{ position: 'relative' }}>
                <img src={item.snippet.thumbnails.medium.url} alt="Thumbnail" />
                {showPlayButton && currentVideo.id === item.id && (
                  <Link to={`video/${item.id}`} style={{ textDecoration: 'none', color: '#fff' }}>
                    <MdPlayArrow fontSize="4rem" style={itemPlayButtonStyles} />
                  </Link>
                )}
              </div>
              <div style={{ padding: '.5rem' }}>
                <div>{item.snippet.title}</div>
                <div>{item.snippet.publishedAt}</div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', zIndex: 1, backgroundColor: 'inherit' }}
        >
          <MdKeyboardArrowRight
            style={{ cursor: 'pointer' }}
            id="arrow-right-coding"
            color="#fff"
            fontSize="5rem"
            onClick={(e) => scrollItems(e)}
          />
        </div>
      </div>
    </>
  );
};

export default Coding;
