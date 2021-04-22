import React from "react";
import { Link } from "react-router-dom";
import { Header, Container } from "../styles/elements";

function NavBar(): JSX.Element {
  return (
    <Header>
      <Container>
        <h1>Wilders Book</h1>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addWilder">Add Wilder</Link>
        </li>
      </Container>
    </Header>
  );
}

export default NavBar;
