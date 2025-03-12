import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.error("Error fetching characters:", err));
  }, []);

  return (
    <>
      
      <div>
      <h1>Star Wars Characters</h1>
      {characters.length === 0 ? (
        <p>Loading...</p>
      ) : (
        characters.map((character) => (
          <div
            key={character.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/character/${character.id}`)}
          >
            <h2>{character.name}</h2>
          </div>
        ))
      )}
    </div>
    </>
  );
};

export default CharacterList;
