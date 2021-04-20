import React, { useState } from "react";
import axios from "axios";
import loadIcon from "../icons/loading.svg";
import { Button, Error, Form, Input, Label } from "../styles/form-elements";

function AddWilder(): JSX.Element {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [skills] = useState([
    { title: "Typescript", votes: 15 },
    { title: "MongoDb", votes: 5 },
  ]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          setLoading(true);
          const result = await axios.post(
            "http://localhost:5000/api/wilder/new",
            {
              name,
              city,
              skills,
            }
          );
          if (result.data.success) {
            setError("");
          }
          // eslint-disable-next-line @typescript-eslint/no-shadow
        } catch (error) {
          if (error.response) {
            setError(error.response.data.message);
          } else {
            setError(error.message);
          }
        } finally {
          setLoading(false);
        }
      }}
    >
      <Label htmlFor="name-input">Name :</Label>
      <Input
        id="name-input"
        type="text"
        placeholder="Type the name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Label htmlFor="city-input">City :</Label>
      <Input
        id="city-input"
        type="text"
        placeholder="Type the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {error !== "" && <Error>{error}</Error>}
      <Button loading={loading}>
        {loading ? <img src={loadIcon} alt="loading" /> : "Add"}
      </Button>
    </Form>
  );
}
export default AddWilder;
