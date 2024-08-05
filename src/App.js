import React, { useState, useEffect } from 'react';
import CharacterCard from './components/CharacterCard';
import CharacterDetailsModal from './components/CharacterDetailsModal';
import './components/index.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load characters.');
        setLoading(false);
      });
  }, []);

  const handleCharacterClick = (character) => {
    
    fetch(character.homeworld)
      .then(response => response.json())
      .then(data => {
        setSelectedCharacter({ ...character, homeworld: data });
        setModalIsOpen(true);
      })
      .catch(err => {
        setError('Failed to load homeworld data.');
      });
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <div className="app">
      <h1 className="app-heading" style={{ textAlign: 'center' }}>Star Wars Information</h1>
      {loading && <div className="loading" style={{ textAlign: 'center' }}>Loading...</div>}
      {error && <div className="error" style={{ textAlign: 'center' }}>{error}</div>}
      <div className="new-cards" style={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "stretch",
          justifyContent: "space-between"
      }}>
        {characters.map(character => (
          <CharacterCard
            key={character.name}
            character={character}
            onClick={handleCharacterClick}
          />
        ))}
      </div>
      {selectedCharacter && (
        <CharacterDetailsModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          character={selectedCharacter}
        />
      )}
    </div>
  );
};

export default App;
