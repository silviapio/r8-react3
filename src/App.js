import { useState } from 'react';
import Joke from './Joke';
import OpenWeather from './OpenWeather';
import fetchJoke from './services';
import { BackgroundDiv, WeatherDiv, JokeDiv, PContainer, NextButton } from './App.styles';

export default () => {
    const [joke, setJoke] = useState("");
    const [nextIsDisabled, disableNext] = useState(false);

    function handleClick() {
        disableNext(true);
        fetchJoke().then((response) => {
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
                    <NextButton onClick={handleClick} disabled={nextIsDisabled}>Next</NextButton>
                </div>
            </JokeDiv>
        </BackgroundDiv>
    );
};