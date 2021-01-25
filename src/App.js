import React, { useState, useEffect } from "react";
import axios from 'axios';
import Joke from "./Joke";

export default () => {
    const [currentPosition, setCurrentPosition] = useState(-1);
    const [jokes, setJokes] = useState([]);
    let currentJoke = jokes[currentPosition];

    async function handleClick() {
        if (currentPosition < jokes.length) {
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
        }             
    }

    return (
        <div>
            <header>Let's begin the day with a good laugh!</header>
            <Joke text={currentJoke} />
            <p>{currentPosition}</p>
            <div>
                <button onClick={() => handleClick()}>Next</button>
            </div>
        </div>
    );
};