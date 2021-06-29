import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import Section from "../Components/Section"
import Loader from "../Components/Loader"

const Box = styled.div`
    margin-top: 1.5rem;
    width: 100%;
    padding-left: 0.8rem;
    &::-webkit-scrollbar{ 
        display:none; 
    }
`;

const Container = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
`;


const Form = styled.form`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Input = styled.input`
    margin-top: 1.5rem;
    border-style: none;
    outline-style: none;
    padding: 0 10px;
    height: 2rem;
    font-size: 1rem;
    width: 20rem;
    background: white;
    border-radius: 5px;
`;

const Search = () => {
    const [searchTerm, setSearchterm] = useState("");
    const [page, setPage] = useState(1);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false); 
    const observer = useRef();
    const lastResultElementRef = useCallback(
      (node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
              if(page===10) {
                  return;
              } else {
                setPage((page) => page + 1);
              }
          }
        });
        if (node) observer.current.observe(node);
      },
      [loading]
    );

    const api = axios.create({
        baseURL: "https://api.themoviedb.org/3/",
        params: {
          api_key: "a6517f9d2b3c3b708bf7a5e6a1753125",
          language: "en-US",
          page: page
        }
      });

    const searchByTerm = async () => {
        setLoading(true)
        const {data: {results}} = await api.get("search/multi", {params: {query: encodeURIComponent(searchTerm)}});
        setResults((rev) => [...rev, ...results]); 
        setLoading(false) 
    }

    const updateTerm = (event) => {
        const { target: { value }} = event;
        setSearchterm(value);
    };

    const handleSubmit = (event) => {
        if(!event) {
            if (searchTerm !== "") {
                searchByTerm();
              }   
        } else {
            event.preventDefault();
            if (searchTerm !== "") {
              setResults([]);
              searchByTerm();
            }    
        }
    };

    useEffect(() => {
        handleSubmit();
    },[page])

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm}/>
            </Form>
            {loading ? <Loader/> : ""}
            <Box>{(results&&results.length) ? <Container>{results.map((result, index) => {
            if (results.length === index + 1) {
              return (<Section ref={lastResultElementRef} id={result.id} key={result.id} date={result.first_air_date ? result.first_air_date : result.release_date} rate={result.vote_average} title={result.name ? result.name : result.title} poster={result.poster_path} media={result.media_type}/>);
            } else {
              return (<Section id={result.id} key={result.id} date={result.first_air_date ? result.first_air_date : result.release_date} rate={result.vote_average} title={result.name ? result.name : result.title} poster={result.poster_path} media={result.media_type}/>);
            }})}</Container> : "" }</Box>
        </React.Fragment>
    )
}

export default Search