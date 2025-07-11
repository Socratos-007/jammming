import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange }) {
  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };

  return (
    <div className="Playlist">
      <input value={playlistName} onChange={handleNameChange} />
      <Tracklist tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button>Save To Spotify</button>
    </div>
  );
}

export default Playlist;