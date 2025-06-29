import React from 'react';
import './Track.css';

function Track({ track, onAdd, onRemove, isRemoval }) {
  const handleAdd = () => {
    onAdd(track);
  };

  const handleRemove = () => {
    onRemove(track);
  };

  return (
    <div className="Track">
      <div>
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      <button onClick={isRemoval ? handleRemove : handleAdd}>
        {isRemoval ? '-' : '+'}
      </button>
    </div>
  );
}

export default Track;