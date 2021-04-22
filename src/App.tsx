import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Wilder, { WilderProps } from "./components/Wilder";
import AddWilder from "./components/AddWilder";
import { CardRow, Container, Footer, Header } from "./styles/elements";

function App(): JSX.Element {
  const [wilders, setWilders] = useState<WilderProps[]>([]);
  useEffect(() => {
    const fetchWilders = async () => {
      try {
        const result = await axios("http://localhost:5000/api/wilders");
        setWilders(result.data.result);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    fetchWilders();
  }, []);

  return (
    <div>
      <Header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </Header>
      <Container>
        <h2>Wilders</h2>
        <CardRow>
          {wilders.map((wilder) => (
            <Wilder
              key={wilder._id}
              name={wilder.name}
              city={wilder.city}
              skills={wilder.skills}
            />
          ))}
        </CardRow>
        <AddWilder />
      </Container>
      <Footer>
        <Container>
          <p>&copy; 2020 Wild Code School</p>
        </Container>
      </Footer>
    </div>
  );
}

export default App;
