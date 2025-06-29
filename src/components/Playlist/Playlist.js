import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist({ playlistName, playlistTracks, onRemove }) {
  return (
    <div className="Playlist">
      <input defaultValue={playlistName} />
      <Tracklist tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button>Save To Spotify</button>
    </div>
  );
}

export default Playlist;