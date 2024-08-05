import React from 'react';
import { useState,useEffect } from 'react';
import './index.css'; 
const CharacterDetailsModal = ({ isOpen, onRequestClose, character, homeWorld }) => {

  if (!character || !isOpen) return null;

  const formatDate = date => {
    const d = new Date(date);
    return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
  };

 

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onRequestClose}>&times;</span>
        <h2>{character.name}</h2>
        <p>Height: {character.height / 100} m</p>
        <p>Mass: {character.mass} kg</p>
        <p>Date Added: {formatDate(character.created)}</p>
        <p>Number of Films: {character.films.length}</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Home World: {character.homeworld.name}</p>
        <p>Terrain: {character.homeworld.terrain}</p>
        <p>Climate: {character.homeworld.climate}</p>
        {
         
          console.log(character.homeworld)
        }
        <p>Number of Residents: {character.homeworld.population}</p>
      </div>
    </div>
  );
};

export default CharacterDetailsModal;
