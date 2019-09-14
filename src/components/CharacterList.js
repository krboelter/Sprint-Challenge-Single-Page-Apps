import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

    // TODO: Add API Request here - must run in `useEffect`
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log(res)
        setCharacters(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <section className="character-list grid-view">
      {characters.map((char, index) => (
        <CharacterCard char={char} key={index}/>
      ))}
    </section>
  );
}
