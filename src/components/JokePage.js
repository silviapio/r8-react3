import {useState} from 'react';
import Joke from './Joke';
import OpenWeather from './OpenWeather';
import {fetchJoke} from './services';
import {WindowDiv, WeatherDiv, PContainer, StyledButton, BackgroundDiv} from './styles/styles';

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
                <StyledButton onClick={handleClick} disabled={nextIsDisabled}>Next Joke</StyledButton>
            </div>
        </WindowDiv>
    </BackgroundDiv>
    );
}