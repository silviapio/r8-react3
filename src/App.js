import React, { useState } from 'react';
import axios from 'axios';
import Joke from './Joke';
import { BackgroundDiv, JokeDiv, PContainer, NextButton } from './styles/styles';


export default () => {
    const [joke, setJoke] = useState("");
    const [nextIsDisabled, disableNext] = useState(false);

    function handleClick() {
        disableNext(true);
        axios.get("https://icanhazdadjoke.com/", {
            headers: {
                "Accept": "application/json"
            }
        }).then((response) => {
            setJoke(response.data.joke);
            disableNext(false);
        });
    }

    return (
        <BackgroundDiv>
            <JokeDiv>
            <header>Let's begin the day with a good laugh 🤣</header>
            <PContainer>
            <Joke text={joke} />
            </PContainer>
            <div>
                <NextButton onClick={() => handleClick()} disabled={nextIsDisabled}>Next</NextButton>
            </div>
            </JokeDiv>
        </BackgroundDiv>
    );
};