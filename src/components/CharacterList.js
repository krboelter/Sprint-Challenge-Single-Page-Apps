import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function CharacterList(props) {

  const CharCard = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 30%;
    height: 400px;
    margin: 20px 20px;
  `

  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [picture, setPicture] = useState(); 
  const [location, setLocation] = useState()

    // TODO: Add API Request here - must run in `useEffect`
  // useEffect(() => {
  //   axios.get(`https://rickandmortyapi.com/api/character/`)
  //     .then(res => {
  //       console.log(res)
  //       setCharacters(res.data.results)
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  return (
    <section className="character-list grid-view">
      {characters.map((char, index) => (
        <CharCard className="character-card" key={index}>
          <img src={char.image} />
          <h2>{char.name}</h2>
          <p>{char.species}: {char.status}</p>
          <p>Location: {char.location.name}</p>
          <p>Origin: {char.origin.name}</p>
        </CharCard>
      ))}
    </section>
  );
}
