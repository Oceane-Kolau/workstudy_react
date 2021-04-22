import React from "react";
import { useQuery, gql } from "@apollo/client";
import Wilder, { WilderProps } from "./Wilder";
import { CardRow, Container, Footer } from "../styles/elements";

const ALL_WILDERS = gql`
  query GetAllWilders {
    allWilders {
      id
      name
      skills {
        title
        votes
      }
    }
  }
`;

function WilderList(): JSX.Element {
  const { loading, error, data } = useQuery(ALL_WILDERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Container>
        <h2>Wilders</h2>
        <CardRow>
          {data.allWilders.map((wilder: WilderProps) => (
            <Wilder
              key={wilder._id}
              name={wilder.name}
              city={wilder.city}
              skills={wilder.skills}
            />
          ))}
        </CardRow>
      </Container>
      <Footer>
        <Container>
          <p>&copy; 2020 Wild Code School</p>
        </Container>
      </Footer>
    </div>
  );
}

export default WilderList;
