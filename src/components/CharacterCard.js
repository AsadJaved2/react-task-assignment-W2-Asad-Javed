import React from 'react';
import './index.css';

const CharacterCard = ({ character, onClick }) => {
  const speciesColorClass = species => {
    switch (species) {
      case 'Human':
        return 'lightblue';
      case 'Droid':
        return 'lightgray';
      default:
        return 'lightgreen';
    }
  };

  return (
    <div
      className={`character-card ${speciesColorClass(character.species)}`}
      onClick={() => onClick(character)}
    >
      <h3>{character.name}</h3>
      <img src={`https://picsum.photos/200?random=${character.name}`} alt={character.name} />
    </div>
  );
};

export default CharacterCard;
