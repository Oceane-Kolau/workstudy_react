import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import loadIcon from "../icons/loading.svg";
import { Button, Error, Form, Input, Label } from "../styles/form-elements";

const CREATE_WILDER = gql`
  mutation CreateWilder($input: InputWilder!) {
    createWilder(input: $input) {
      name
      city
    }
  }
`;

function AddWilder(): JSX.Element {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const [createWilder, { data, loading, error }] = useMutation(CREATE_WILDER);
  console.log(createWilder);
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        createWilder({
          variables: {
            input: {
              name,
              city,
            },
          },
        });
      }}
    >
      {data && <p>wilder {data.createWilder.name} a été ajouté.e</p>}
      <Label htmlFor="name-input">Name :</Label>
      <Input
        id="name-input"
        type="text"
        placeholder="Type the name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <Label htmlFor="city-input">City :</Label>
      <Input
        id="city-input"
        type="text"
        placeholder="Type the city"
        value={city}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCity(e.target.value)
        }
      />
      {error ? <Error>{error}</Error> : ""}
      <Button loading={loading}>
        {loading ? <img src={loadIcon} alt="loading" /> : "Add"}
      </Button>
    </Form>
  );
}
export default AddWilder;
