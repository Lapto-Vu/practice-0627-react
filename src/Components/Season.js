import React from "react"
import styled from "styled-components"

const Poster = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
`;

const Title = styled.div`
    margin-top : 1rem;
    font-weight: 500;
    font-size: 1rem;
`;

const Container = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.15s linear;
`

const Season = ({name, poster}) => {
    return (
        <Container>
            <Title>{(name.length < 16) ? name : `${name.substring(0,16)}...`}</Title>
            <Poster src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : require("../Assets/noposter.jpeg")} />
        </Container>
    )
}

export default Season