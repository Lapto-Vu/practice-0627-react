import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components"

const Header = styled.div`
width: 100%;
height: 4rem;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
box-shadow: rgb(134, 134, 134) -5px -5px 10px, rgb(242, 242, 242) 1px 1px 10px;
font-weight: 400;
`

const Content = styled.div`
width: 24rem;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
border-radius: 40px;
`;

const SLink = styled(Link)`
margin: 0 4px;
height: 100%;
border-bottom: 4px double ${props => (props.current ? "#F2B37D" : "transparent")};
transition: all 0.1s ease-in-out;
padding: 5px 14px;
display: flex;
justify-content: center;
align-items: center;
border-top-right-radius: 5px;
border-top-left-radius: 5px;
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