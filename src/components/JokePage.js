import React, {useState} from 'react';
import axios from 'axios';
import Joke from './Joke';
import OpenWeather from './OpenWeather';
import {WindowDiv, WeatherDiv, PContainer, StyledButton, BackgroundDiv} from './styles/styles';

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

    return(
    <BackgroundDiv>
        <WeatherDiv>
                <OpenWeather city="Barcelona" />
        </WeatherDiv>
        <WindowDiv joke>
            <header>Let's begin the day with a good laugh 🤣</header>
            <PContainer>
                <Joke text={joke} />
            </PContainer>
            <div>
                <StyledButton onClick={() => handleClick()} disabled={nextIsDisabled}>Next Joke</StyledButton>
            </div>
        </WindowDiv>
    </BackgroundDiv>
    );
}