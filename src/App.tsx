import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddWilder from "./components/AddWilder";
import { Container, Footer } from "./styles/elements";
import WilderList from "./components/WilderList";

function App(): JSX.Element {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={WilderList} />
        <Route exact path="/addWilder" component={AddWilder} />
      </BrowserRouter>
      <Footer>
        <Container>
          <p>&copy; 2020 Wild Code School</p>
        </Container>
      </Footer>
    </div>
  );
}

export default App;
