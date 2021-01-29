import React, {useState} from 'react';
import Joke from './Joke';
import OpenWeather from './OpenWeather';
import {WindowDiv, WeatherDiv, PContainer, NextButton} from './styles/styles';

export default () => {
    const [currentPosition, setCurrentPosition] = useState(-1);
    const [jokes, setJokes] = useState([]);
    const [nextIsDisabled, disableNext] = useState(false);
    let currentJoke = jokes[currentPosition];

    /* REVIEW
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
    }*/

    return(
    <div>
        <WeatherDiv>
                <OpenWeather city="Barcelona" />
        </WeatherDiv>
        <WindowDiv joke>
            <header style={{fontWeight: "500", textAlign: "center"}}>Let's begin the day with a good laugh 🤣</header>
            <PContainer>
            <Joke text="This will be the current joke" />
            </PContainer>
            <div>
                <NextButton >Next Joke</NextButton>
            </div>
        </WindowDiv>
    </div>
    );
}

/*button next
onClick={/*() => handleClick()} disabled={nextIsDisabled}*/