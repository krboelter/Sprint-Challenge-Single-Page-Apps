import React from "react";
import styled from "styled-components";


export default function CharacterCard(props) {

  const CharCard = styled.div`
  width: 30%;
  height: 450px;
  margin: 10px 10px;
  border: 2px solid black;
  box-shadow: 0 0 8px gray;
  border-radius: 8px;
  padding: 2px;
`
const Header = styled.h2`
  margin: 2px 0;
`
const Paragraph = styled.p`
  margin: 2px 0;
`

  return (
    <CharCard className="character-card">
      <img src={props.char.image} width="100%" height="300" />
      <Header>{props.char.name}</Header>
      <Paragraph>{props.char.species}: {props.char.status}</Paragraph>
      <Paragraph>Location: {props.char.location.name}</Paragraph>
      <Paragraph>Origin: {props.char.origin.name}</Paragraph>
    </CharCard>
  )
}
