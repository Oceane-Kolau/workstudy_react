import React, { useState } from "react";
import { ReactComponent as loadingIcon } from "../icons/loading.svg";
import axios from "axios";

function AddWilder() {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [skills] = useState({ title: "React", votes: 15 }, { title: "MongoDb", votes: 5 });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                try {
                    setLoading(true)
                    const result = await axios.post("http://localhost:5000/api/wilder/new",
                        {
                            name,
                            city,
                            skills
                        }
                    );
                    console.log(result);
                    if (result.data.success) {
                        setError("");
                    }
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
            <button showLoading={loading}>
                {loading ? (
                    <img src={loadingIcon} alt="loading" />
                ) : (
                    "Add"
                )}
            </button>
        </form>
    );
}
export default AddWilder;
