import styled, { createGlobalStyle } from 'styled-components';
import jokePageBg from './assets/people-laughing.jpg';

export const GlobalStyle = createGlobalStyle`
    body {
        min-height: 100vh; 
        box-sizing: border-box; 
        margin: 0
    }
    @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap');
`;

export const BackgroundDiv = styled.div`
    height: 100vh;
    min-height : 100vh;
    background: url(${jokePageBg}) no-repeat;
    background-size: cover;
    background-color: #b2bec3;
    background-blend-mode: overlay;
    font-family: 'Work Sans', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;
export const WeatherDiv = styled.div`
    align-self: flex-start;
    padding-left: 0.5rem;
    margin: 0.5rem 0;
    font-size: 0.75rem;    
    p {
        margin: 0;
        color: #456268;
    } 
`;
export const JokeDiv = styled.div`
    box-sizing: border-box;
    margin-top: 0.5rem;
    padding: 1rem;
    min-height: 165px;
    width: 45vw;
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
    header {
        font-weight: 500;
        text-align: center;
    }
`;
export const PContainer = styled.div`
    min-height: 4rem;
    text-align: center;
    font-size: 0.8rem;
`;
export const NextButton = styled.button`
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