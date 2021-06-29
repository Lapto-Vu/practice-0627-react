import React, { useEffect } from "react"
import { Link, withRouter } from "react-router-dom";
import useDetail from "../Components/useDetail";
import styled from "styled-components";
import Loader from "../Components/Loader";

const Container = styled.div `
    height: calc(100vh - 4rem);
    width: 100%;
    background:black;
    position: relative;
    display: flex;
    justify-content: center;
    z-index: -2;
`;

const Backdrop = styled.img`
    position:absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(5px);
    opacity: 0.5;
    z-index: -1;

`;

const Content = styled.div`
    position: relative;
    width: 60rem;
    color: white;
    height: 100%;
    z-index: 1;
    display: flex;
`;

const Poster = styled.img`
    width: 50%;
    height: 100%;
    padding: 3rem 2rem;
    object-fit: cover;
`;

const RightBar = styled.div`
    width: 50%;
    height: 100%;
    padding: 4rem 0;
    display: grid;
    font-size: 1rem;
    font-weight: 400;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, min-content);
    gap: 2rem;
`;


const Title = styled.span`
    font-size: 2rem;
    line-height: 3rem;
`
const Sub = styled.span`
    text-align: justify;
    line-height: 1.5rem;
`

const Summary = styled.p`
    font-weight: 300;
    text-align: justify;
    line-height: 1.5rem;
`;

// date={result.first_air_date ? result.first_air_date : result.release_date} 
// rate={result.vote_average} 
// media={result.media_type}

const Detail = withRouter((props) => {
    const {detail, loading} = useDetail(props)
    console.log(detail)
	return (
        loading ? <Loader /> : <Container>
            <Content>
                <Poster src={detail.poster_path ? `https://image.tmdb.org/t/p/original${detail.poster_path}` : require("../Assets/noposter.jpeg")} />
                <RightBar>
                    <Title>{detail.name ? detail.name : detail.title} </Title>
                    <Sub>{detail.first_air_date ? detail.first_air_date.substr(0,4) : detail.release_date.substr(0,4)} ・ {detail.episode_run_time ? detail.episode_run_time[0] : ((detail.runtime) ? detail.runtime : "0")} MIN ・ {detail.genres.map((v,i) => (detail.genres.length === i+1) ? v.name.toUpperCase()  : `${v.name.toUpperCase()} ・ `)} </Sub>
                    <Summary>{detail.overview}</Summary>
                </RightBar>
            </Content>
            <Backdrop src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}/>
        </Container>
    )
});

export default Detail