import React, { useEffect, useState } from "react";
import axios from "axios";
import Wilder, { WilderProps } from "./Wilder";
import { CardRow, Container } from "../styles/elements";

function WilderList(): JSX.Element {
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
    <Container>
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
    </Container>
  );
}

export default WilderList;
