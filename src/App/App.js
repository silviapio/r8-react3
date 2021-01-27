import React, { useState } from "react";
import axios from 'axios';
import Joke from "../Joke";
import OpenWeather from "../OpenWeather";
import {BackgroundDiv, WeatherDiv, JokeDiv, PContainer, NextButton} from './styles';

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
        <BackgroundDiv>
            <WeatherDiv>
                <OpenWeather city="Barcelona" />
            </WeatherDiv>
            <JokeDiv>
            <header style={{fontWeight: "500", textAlign: "center"}}>Let's begin the day with a good laugh 🤣</header>
            <PContainer>
            <Joke text={currentJoke} />
            </PContainer>
            <div>
                <NextButton onClick={() => handleClick()} disabled={nextIsDisabled}>Next Joke</NextButton>
            </div>
            </JokeDiv>
        </BackgroundDiv>
    );
};