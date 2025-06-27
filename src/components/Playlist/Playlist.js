import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist() {
  return (
    <div className="Playlist">
      <input defaultValue="New Playlist" />
      <Tracklist tracks={[]} />
      <button>Save To Spotify</button>
    </div>
  );
}

export default Playlist;
