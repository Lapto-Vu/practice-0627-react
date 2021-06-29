import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Loader = () => {

    return (
        <Container>Loading...</Container>
    )
}

export default Loader