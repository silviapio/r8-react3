import React, {useState} from 'react';
import axios from 'axios';
import Joke from './Joke';
import OpenWeather from './OpenWeather';
import {WindowDiv, WeatherDiv, PContainer, StyledButton, BackgroundDiv} from './styles/styles';

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

    return(
    <BackgroundDiv>
        <WeatherDiv>
                <OpenWeather city="Barcelona" />
        </WeatherDiv>
        <WindowDiv joke>
            <header style={{fontWeight: "500", textAlign: "center"}}>Let's begin the day with a good laugh 🤣</header>
            <PContainer>
                <Joke text={currentJoke} />
            </PContainer>
            <div>
                <StyledButton onClick={() => handleClick()} disabled={nextIsDisabled}>Next Joke</StyledButton>
            </div>
        </WindowDiv>
    </BackgroundDiv>
    );
}

/*button next
*/