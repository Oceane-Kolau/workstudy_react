import React, { useState } from "react";
import axios from "axios";

function AddWilder(): JSX.Element {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [skills] = useState([
    { title: "Typescript", votes: 15 },
    { title: "MongoDb", votes: 5 },
  ]);
  const [error, setError] = useState("");
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
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
        }
      }}
    >
      <label htmlFor="name-input">Name :</label>
      <input
        id="name-input"
        type="text"
        placeholder="Type the name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="city-input">City :</label>
      <input
        id="city-input"
        type="text"
        placeholder="Type the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {error !== "" && <p>{error}</p>}
      <button type="submit">Add</button>
    </form>
  );
}
export default AddWilder;
