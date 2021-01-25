import React, { useState, useEffect } from "react";
import axios from 'axios';
import Joke from "./Joke";

export default () => {
    const [currentPosition, setCurrentPosition] = useState(-1);
    const [jokes, setJokes] = useState([]);
    const [nextIsDisabled, disableNext] = useState(false);
    let currentJoke = jokes[currentPosition];

    async function handleClick() {
        if (currentPosition < jokes.length) {
            disableNext(true);
            let newIndex = await axios.get("https://icanhazdadjoke.com/", {
                headers: {
                    "Accept": "application/json"
                }
            }).then((response) => {
                setJokes([
                    ...jokes,
                    response.data.joke
                ]);
                return jokes.length;
            });
            setCurrentPosition(newIndex);
            disableNext(false);   
        }             
    }

    return (
        <div>
            <header>Let's begin the day with a good laugh!</header>
            <Joke text={currentJoke} />
            <div>
                <button onClick={() => handleClick()} disabled={nextIsDisabled}>Next</button>
            </div>
        </div>
    );
};