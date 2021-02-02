import React, { useState } from "react";
import Joke from "./Joke";
import fetchJoke from './services';

export default () => {
    const [joke, setJoke] = useState("");
    const [nextIsDisabled, disableNext] = useState(false);

    function handleClick() {
        disableNext(true);
        fetchJoke().then((response) => {
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
                <button onClick={handleClick} disabled={nextIsDisabled}>Next</button>
            </div>
        </div>
    );
};