import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    const Container = styled.div`
        width: 45%;
        height: 150px;
        margin: 10px 10px;
        border: 2px solid black;
        box-shadow: 0 0 8px gray;
        border-radius: 8px;
        padding: 10px;
    `

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
            .then(res => {
                console.log(res)
                setLocations(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <section className="character-list grid-view">
            {locations.map((loc, index) => (
                <Container key={index}>
                    <h2>{loc.name}</h2>
                    <p>Planet: {loc.dimension}</p>
                    <div>
                        <p>{loc.residents.length} residents</p>
                    </div>
                </Container>
            ))}
        </section>
    )
}
