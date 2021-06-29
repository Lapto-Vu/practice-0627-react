import React, { useRef, useState, useEffect } from "react";
import useApi from "../Components/useApi"
import Loader from "../Components/Loader"
import Section from "../Components/Section"
import styled from "styled-components";

const Box = styled.div`
    height: 23rem;
    width: 100%;
    overflow-y: scroll;
    padding: 1rem;

    &::-webkit-scrollbar{ 
        display:none; 
    }
`;

const Container = styled.div `
    height: 100%;
    width: fit-content;
    display: flex;
`;

const Header = styled.div `
    margin-left: 1.2rem;
    font-weight: 500;
    &.first {
        margin-top: 1.5rem;
    }
`;

const Top = styled.div `
    position: fixed;
    bottom: 20px;
    right: 25px;
    background-color: white;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgb(182, 182, 182) 1px 1px 4px;
    opacity: 0.9;
    &:hover {
        cursor: pointer;
    }
`;



const Movie = () => {
    const nowPlaying = useApi("movie/now_playing"); 
    const upcoming = useApi("movie/upcoming"); 
    const popular = useApi("movie/popular");
    const scrollOne = useRef();
    const scrollTwo = useRef();
    const scrollThree = useRef();
    const [tag, setTag] = useState(`◉`);
    const [sum, setSum] = useState(300);

    const handleOne = (e) => {
        scrollOne.current.scrollLeft += e.deltaY
    }

    const handleTwo = (e) => {
        scrollTwo.current.scrollLeft += e.deltaY
    }

    const handleThree = (e) => {
        scrollThree.current.scrollLeft += e.deltaY
    }

    const handleClick = () => {
        if(sum===600) {
            setSum(0)
            window.scrollTo({
                top: sum,
                left: 0,
                behavior: "smooth"
            })
        } else {
            setSum(sum => sum+= 300)
            setTag(`◉`)
            window.scrollTo({
                top: sum,
                left: 0,
                behavior: "smooth"
            })
        }

        if(sum===600) {
            setTag(`▵`)
        }
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => document.body.style.overflow = "visible";
    },[])
    return (
        <React.Fragment>       
            <Header className="first" >Now Playing</Header>
            <Box ref={scrollOne} onWheel={handleOne} >{(nowPlaying&&nowPlaying.length) ? <Container>{nowPlaying.map(movie => <Section id={movie.id} key={movie.id} date={movie.release_date} rate={movie.vote_average} title={movie.title} poster={movie.poster_path} media="movie"/>)}</Container> : <Loader /> }</Box>
            <Header >Popular</Header>
            <Box ref={scrollTwo} onWheel={handleTwo} >{(popular&&popular.length) ? <Container>{popular.map(movie => <Section id={movie.id} key={movie.id} date={movie.release_date} rate={movie.vote_average} title={movie.title} poster={movie.poster_path} media="movie"/>)}</Container> : <Loader /> }</Box>
            <Header >Upcoming</Header>
            <Box ref={scrollThree} onWheel={handleThree} >{(upcoming&&upcoming.length) ? <Container>{upcoming.map(movie => <Section id={movie.id} key={movie.id} date={movie.release_date} rate={movie.vote_average} title={movie.title} poster={movie.poster_path} media="movie"/>)}</Container> : <Loader /> }</Box>
            <Top onClick={handleClick}>{tag}</Top>
        </React.Fragment>
    )
}

export default Movie