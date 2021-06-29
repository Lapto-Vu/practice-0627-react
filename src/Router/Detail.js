import React from "react"
import { withRouter } from "react-router-dom";
import useDetail from "../Components/useDetail";
import styled from "styled-components";
import Loader from "../Components/Loader";
import Collection from "../Components/Collection";
import Season from "../Components/Season";

const Backdrop = styled.img`
    position: fixed;
    top: 4rem;
    width: 110%;
    left: -2rem;
    height: 100%;
    object-fit: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: -1;

`;

const BlackBar = styled.div`
    position: fixed;
    background-color: black;
    top: 4rem;
    width: 110%;
    left: -2rem;
    height: 100%;
    z-index: -2;

`;

const Content = styled.div`
    position: relative;
    width: 100%;
    color: white;
    height: calc(100vh - 4rem);
    display: flex;
    justify-content: center;

`;

const Poster = styled.img`
    width: 40%;
    height: 100%;
    padding: 3rem 2rem;
    object-fit: contain;
`;

const Collector = styled.div`
    height: 100%;
    width: 20%;
    margin-left: 2rem;
    padding: 4rem 0;
    display: grid;
    font-size: 1rem;
    font-weight: 400;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, min-content);
    justify-items: center;
    overflow: scroll;

    &::-webkit-scrollbar{ 
        display:none; 
    }

`;

const Ctitle = styled.span`
    font-size: 1.5rem;
    line-height: 3rem;
    margin-bottom: 1rem;
    font-weight: 500;
`;

const Last = styled.div`
    width: 70%;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
`;

const RightBar = styled.div`
    width: 30%;
    height: 100%;
    padding: 4rem 0;
    display: grid;
    font-size: 1rem;
    font-weight: 400;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, min-content);
`;


const Title = styled.span`
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 2rem;
`

const Dub = styled.div`
    text-align: justify;
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Company = styled.img`
    position: relative;
    top: 1px;
    width: 60px;
    height: 20px;
    margin: 0 8px 0 13px;
    border-radius: 3px;
    object-fit: contain;
    filter: invert(100%);
`;

const Imdb = styled.img`
    width: 40px;
    height: 20px;
    margin: 0 8px;
    object-fit: cover;
    border-radius: 3px;
`;

const Pool = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;  
`;


const Sub = styled.span`
    text-align: justify;
    line-height: 1.5rem;
    margin-bottom: 2rem;
`;


const Summary = styled.p`
    font-weight: 300;
    text-align: justify;
    line-height: 1.5rem;
`;

const Detail = withRouter((props) => {
    const {detail, loading} = useDetail(props);

	return (
        loading ? <Loader /> : <React.Fragment>
             <Content>
                 {(detail.seasons&&detail.seasons.length > 1) ? <Collector><Ctitle>Seasons</Ctitle><Last>{detail.seasons.map(season => <Season key={season.id} name={season.name ? season.name : "NONE" } poster={season.poster_path} />)}</Last></Collector> : ""}
                <Poster src={detail.poster_path ? `https://image.tmdb.org/t/p/original${detail.poster_path}` : require("../Assets/noposter.jpeg")} />
                <RightBar>
                    <Title>{detail.name ? detail.name : detail.title}</Title>
                    <Dub>{detail.origin_country||detail.production_countries ? (detail.origin_country ? detail.origin_country : (detail.production_countries.length===0 ? "" : detail.production_countries[0].iso_3166_1)) : ""}{detail.production_companies===null ?  <Company src={`https://image.tmdb.org/t/p/w500${detail.production_companies[0].logo_path}`} /> : ""}{detail.imdb_id ? <Pool target="_blank" href={`https://www.imdb.com/title/${detail.imdb_id}`}><Imdb src={require("../Assets/imdb.png")} /></Pool> : ""}</Dub>
                    <Sub>{detail.first_air_date ? detail.first_air_date.substr(0,4) : detail.release_date.substr(0,4)} ・ {detail.episode_run_time ? detail.episode_run_time[0] : ((detail.runtime) ? detail.runtime : "0")} MIN ・ {detail.genres.map((v,i) => (detail.genres.length === i+1) ? v.name.toUpperCase()  : `${v.name.toUpperCase()} ・ `)} </Sub>
                    <Summary>{detail.overview}</Summary>
                </RightBar>
                {detail.belongs_to_collection ? <Collector>
                    <Ctitle>Collection</Ctitle>
                    <Last><Collection id={detail.belongs_to_collection.id}/></Last>
                </Collector> : "" }
            </Content>
            <Backdrop src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}/>
            <BlackBar/>
        </React.Fragment>
    )
});

export default Detail