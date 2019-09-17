import React from "react";
import styled from "styled-components";

export default function LocationCard(props) {

    const Container = styled.div`
        width: 45%;
        height: 150px;
        margin: 10px 10px;
        border: 2px solid black;
        box-shadow: 0 0 8px gray;
        border-radius: 8px;
        padding: 10px;
    `

  return (
      <Container>
          <h2>{props.location.name}</h2>
          <p>Planet: {props.location.dimension}</p>
          <div>
              <p>{props.location.residents.length} residents</p>
          </div>
      </Container>
    )
}
