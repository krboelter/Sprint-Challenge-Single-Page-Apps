import React, { useState, useEffect } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodesList() {

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
        .then(res => {
            setEpisodes(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])

  return(
    <section className="episode-container">
        {episodes.map((episode, index) => (
            <EpisodeCard episodes={episode} key={index} />
        ))}
    </section>
  )
}
