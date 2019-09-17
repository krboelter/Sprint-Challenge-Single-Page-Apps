import React from "react";
import styled from "styled-components";

export default function EpisodeCard(props) {

    const EpisodeCard = styled.div`
        width: 25%;
        margin: 10px 10px;
        border: 2px solid black;
        box-shadow: 0 0 8px gray;
        border-radius: 8px;
        padding: 10px 5px;
    `

  return(
    <EpisodeCard className="episode-card">
        <h2>{props.episodes.name}</h2>
        <p>Air Date: {props.episodes.air_date}</p>
        <p>Episode: {props.episodes.episode}</p>
    </EpisodeCard>
  )
}
