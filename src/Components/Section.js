import React from "react";
import styled from "styled-components"

const Poster = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: rgb(234, 234, 234) -5px -5px 8px, rgb(182, 182, 182) 2px 2px 8px;
    transition: transform 0.1s linear;
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


const Container = styled.div`
    margin: 0.5rem 0.7rem 0 0;
    width: 12rem;
    height: 100%;
    display: flex;
    flex-direction: column;


    &:hover {
        cursor: pointer;
        
        ${Poster} {
            opacity: 0.8;
            transform: scale(1.05);
            transition: transform 0.1s linear;
        }

        ${Rate} {
            opacity: 1;
            transition: opacity 0.1s linear;
        }

        ${LowerBar} {
            opacity: 0.7;
            transition: opacity 0.1s linear;
        }
    }
`;




const Section = ({ date, rate, title, poster}) => {
    return (
        <Container>
            <HigherBar>
                <Poster src={`https://image.tmdb.org/t/p/w300${poster}`} ></Poster>
                <Rate>{rate} / 10</Rate>
            </HigherBar>
            <LowerBar>
                <Title>{(title.length < 16) ? title : `${title.substr(0,16)}...`}</Title>
                <Date>{date ? date.substr(0,4) : `NONE`}</Date>
            </LowerBar>
        </Container>
    )
}

export default Section