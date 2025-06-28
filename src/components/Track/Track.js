import React from 'react';
import './Track.css';

function Track({ track, onAdd, isRemoval }) {
  const handleAdd = () => {
    onAdd(track);
  };

  return (
    <div className="Track">
      <div>
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      <button onClick={handleAdd}>{isRemoval ? '-' : '+'}</button>
    </div>
  );
}

export default Track;