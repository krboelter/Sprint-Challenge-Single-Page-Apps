import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";
import styled from "styled-components";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
            .then(res => {
                setLocations(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <section className="character-list grid-view">
            {locations.map((loc, index) => (
                <LocationCard location={loc} key={index} />
            ))}
        </section>
    )
}
