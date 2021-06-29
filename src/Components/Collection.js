import React from "react"
import Section from "../Components/Section";
import useCollection from "../Components/useCollection"
import Loader from "./Loader";
import styled from "styled-components";

const Container = styled.div``;
const Box = styled.div``;

const Collection = ({id}) => {
    const {collection, loading} = useCollection(id)
    console.log(collection)
    return (
        <Container>
            {loading ? <Loader /> : <Box>{collection.map(collect => <Section id={collect.id} key={collect.id} date={collect.first_air_date ? collect.first_air_date : collect.release_date} rate={collect.vote_average} title={collect.name ? collect.name : collect.title} poster={collect.poster_path} media={collect.media_type}/>)}</Box>}
        </Container>
    )
}

export default Collection