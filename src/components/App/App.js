import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  // Mock-данные для результатов поиска
  const searchTracks = [
    { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Song 3', artist: 'Artist 3', album: 'Album 3' },
  ];

  // Состояние для плейлиста
  const [playlistTracks, setPlaylistTracks] = useState([
    { id: 4, name: 'Song 4', artist: 'Artist 4', album: 'Album 4' },
    { id: 5, name: 'Song 5', artist: 'Artist 5', album: 'Album 5' },
  ]);

  // Название плейлиста
  const playlistName = 'My Awesome Playlist';

  // Функция для добавления трека
  const addTrack = (track) => {
    if (!playlistTracks.some((existingTrack) => existingTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  // Функция для удаления трека
  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((existingTrack) => existingTrack.id !== track.id));
  };

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <div className="App-container">
        <SearchResults searchResults={searchTracks} onAdd={addTrack} />
        <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} />
      </div>
    </div>
  );
}

export default App;