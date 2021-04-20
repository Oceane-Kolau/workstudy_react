import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Wilder, { WilderProps } from "./components/Wilder";
import AddWilder from "./components/AddWilder";

function App(): JSX.Element {
  const [wilders, setWilders] = useState([]);
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
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wilders.map((wilder: WilderProps) => (
            <Wilder
              key={wilder._id}
              name={wilder.name}
              city={wilder.city}
              skills={wilder.skills}
            />
          ))}
        </section>
        <AddWilder />
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2020 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
