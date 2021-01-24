import React, { useState, useEffect } from "react";
import axios from 'axios';
import Joke from "./Joke";

export default () => {
    const [currentPosition, setCurrentPosition] = useState(-1);
    const [jokes, setJokes] = useState([]);
    const currentJoke = jokes[currentPosition];

    useEffect(() => {
        if (currentPosition === jokes.length) {
        axios.get("https://icanhazdadjoke.com/", { 
            headers: {
                "Accept": "application/json"
            }
        }).then((response) => {
            setJokes([
                ...jokes,
                response.data.joke
            ]);
        });
    } 
    }, [currentPosition])


    function handleClick(increment) {
        setCurrentPosition(prevPosition => prevPosition + increment);
        
    }
    /*function increment() {
        setCount(prevCount => prevCount + 1);
    }

    function decrement() {
        setCount(prevCount => prevCount - 1);
    }*/

    return (
        <div>
            <header>Let's begin the day with a good laugh!</header>
            <Joke text={currentJoke} />
            <p>{/*currentPosition*/}</p>
            <div>
                <button onClick={() => handleClick(-1)}>Previous</button>
                <button onClick={() => handleClick(+1)}>Next</button>
            </div>
        </div>
    );
};