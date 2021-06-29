import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Poster = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    transition: transform 0.1s linear;
`;

const Media = styled.div`
    position: absolute;
    font-size: 0.5rem;
    bottom: 0.6rem;
    letter-spacing: 0.04rem;
    left: 0.7rem;
    color: #ffe4a4;
    opacity: 0;
    transition: opacity 0.1s linear;
`;

const Rate = styled.div`
    position: absolute;
    font-size: 0.5rem;
    bottom: 0.6rem;
    letter-spacing: 0.04rem;
    right: 0.7rem;
    color: #ffe4a4;
    opacity: 0;
    transition: opacity 0.1s linear;
`;

const HigherBar = styled.div`
    width: 100%;
    height: 80%;
    position: relative;
    background-color: black;
    border-radius: 5px;
    overflow: hidden;
    /* box-shadow: rgb(234, 234, 234) -5px -5px 8px, rgb(182, 182, 182) 5px 5px 10px; */
`;

const Title = styled.div`
    font-weight: 500;
    font-size: 1rem;
`;

const Date = styled.div`
    font-weight: 300;
    margin-top: 5px;
    font-size: 0.5rem;
`;

const LowerBar = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    transition: opacity 0.1s linear;
`;


const Container = styled(Link)`
    margin: 0 0.7rem 0 0;
    width: 12rem;
    height: 24rem;
    display: flex;
    flex-direction: column;
    transition: transform 0.15s linear;


    &:hover {
        cursor: pointer;

        transform: translateY(-10px);
        transition: transform 0.15s linear;
        
        ${Poster} {
            opacity: 0.8;
            transform: scale(1.05);
            transition: transform 0.1s linear;
        }

        ${Rate} {
            opacity: 1;
            transition: opacity 0.1s linear;
        }

        ${Media} {
            opacity: 1;
            transition: opacity 0.1s linear;
        }

    }
`;

const Section = React.forwardRef((props, ref) => (
        <Container ref={ref} to={props.media ? ((props.media==="movie") ? `/movie/${props.id}` : `/tv/${props.id}`) : `/movie/${props.id}`}>
            <HigherBar>
                <Poster src={props.poster ? `https://image.tmdb.org/t/p/w300${props.poster}` : require("../Assets/noposter.jpeg")} ></Poster>
                <Rate>{props.rate} / 10</Rate>
                <Media>{props.media ? ((props.media==="movie") ? "MOVIE" : "TV") : ""}</Media>
            </HigherBar>
            <LowerBar>
                <Title>{(props.title.length < 16) ? props.title : `${props.title.substr(0,16)}...`}</Title>
                <Date>{props.date ? props.date.substr(0,4) : `NONE`}</Date>
            </LowerBar>
        </Container>
))

export default Section