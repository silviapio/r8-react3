import React, { useState } from "react";
import axios from 'axios';
import Joke from "./Joke";

export default () => {
    const [joke, setJoke] = useState("");
    const [nextIsDisabled, disableNext] = useState(false);

    async function handleClick() {
        disableNext(true);
        axios.get("https://icanhazdadjoke.com/", {
            headers: {
                "Accept": "application/json"
            }
        }).then((response) => {
            setJoke(
                response.data.joke
            );
            disableNext(false);
        });
    }

    return (
        <div>
            <header>Let's begin the day with a good laugh!</header>
            <Joke text={joke} />
            <div>
                <button onClick={() => handleClick()} disabled={nextIsDisabled}>Next</button>
            </div>
        </div>
    );
};