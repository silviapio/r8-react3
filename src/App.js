import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import Joke from "./Joke";

const BackgroundDiv = styled.div`
    height: 100vh;
    min-height : 100vh;
    background: url('../img/people-laughing.jpg') no-repeat;
    background-size: cover;
    background-color: #b2bec3;
    background-blend-mode: overlay;
    font-family: 'Work Sans', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;
const WeatherDiv = styled.div`
    align-self: flex-start;
    padding-left: 0.5rem;
    margin: 0.5rem 0;
    font-size: 0.75rem;    
    p {
        margin: 0;
        color: #456268;
    } 
`;
const JokeDiv = styled.div`
    margin-top: 0.5rem;
    padding: 0.5rem;
    min-height: 165px;
    width: 40vw;
    @media(max-width: 576px) {
        width: 90vw;
    }
    @media(max-width: 768px) {
        width: 70vw;
    }
    background-color: #e8eae6;
    color: #456268;
    border-radius: 10px;
    box-shadow: inset 0 0 10px 0 #456268;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const PContainer = styled.div`
    min-height: 4rem;
    text-align: center;
    font-size: 0.8rem;
`;
const NextButton = styled.button`
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    color: #456268;
    background-color: #cdd0cb;
    border-radius: 5px;
    border: 2px solid #456268;
    @media(max-width: 768px) {
        padding: 0.25rem;
    }
    &:hover {
        cursor: pointer;
    }
    &:disabled {
        color: #fff;
        border: 2px solid #fff;
        background-color: #E9ECE7;
    }
`;

export default () => {
    const [currentPosition, setCurrentPosition] = useState(-1);
    const [jokes, setJokes] = useState([]);
    const [nextIsDisabled, disableNext] = useState(false);
    let currentJoke = jokes[currentPosition];
    let weather = "";

    useEffect(async ()=> {
        let currentConditions = await axios.get("api.openweathermap.org/data/2.5/weather?q={Barcelona, ES}&appid={500a5cfb8db5ea91e3d49a9f8bee71c0}")
            .then((response) => { });
        weather = "Today in Barcelona we have" + currentConditions;
    })

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
                <p>Today in Barcelona it's sunny :){/*weather*/}</p>
            </WeatherDiv>
            <JokeDiv>
            <header style={{fontWeight: "500", textAlign: "center"}}>Let's begin the day with a good laugh 🤣</header>
            <PContainer>
            <Joke text={currentJoke} />
            </PContainer>
            <div>
                <NextButton onClick={() => handleClick()} disabled={nextIsDisabled}>Next</NextButton>
            </div>
            </JokeDiv>
        </BackgroundDiv>
    );
};