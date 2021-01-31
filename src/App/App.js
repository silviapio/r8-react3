import React, { useState } from "react";
import axios from 'axios';
import Joke from "../Joke";
import OpenWeather from "../OpenWeather";
import {BackgroundDiv, WeatherDiv, JokeDiv, PContainer, NextButton} from './styles';

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
            <WeatherDiv>
                <OpenWeather city="Barcelona" />
            </WeatherDiv>
            <JokeDiv>
            <header>Let's begin the day with a good laugh 🤣</header>
            <PContainer>
            <Joke text={joke} />
            </PContainer>
            <div>
                <NextButton onClick={() => handleClick()} disabled={nextIsDisabled}>Next Joke</NextButton>
            </div>
            </JokeDiv>
        </BackgroundDiv>
    );
};