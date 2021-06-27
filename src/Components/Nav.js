import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components"

const Header = styled.div`
width: 100%;
height: 6rem;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
`

const Content = styled.div`
width: 24rem;
height: 70%;
display: flex;
justify-content: center;
align-items: center;
border-radius: 40px;
`;

const SLink = styled(Link)`
margin: 0 4px;
height: 65%;
border-bottom: 4px solid ${props => (props.current ? "white" : "transparent")};
transition: all 0.1s ease-in-out;
padding: 5px 14px;
display: flex;
justify-content: center;
align-items: center;
border-top-right-radius: 5px;
border-top-left-radius: 5px;
&:hover {
	background-color: rgba(255,255,255,0.3);
}
`;

const Nav = withRouter(({ location: { pathname } }) => {
	return (
		<Header>
			<Content>
				<SLink current={pathname === "/"} to="/">MOVIE</SLink>
				<SLink current={pathname === "/tv"} to="/tv">TV</SLink>
				<SLink current={pathname === "/search"} to="/search">SEARCH</SLink>
			</Content>
		</Header>
	);
});

export default Nav;	