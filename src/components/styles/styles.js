import styled from 'styled-components';

export const BackgroundDiv = styled.div`
    height: 100vh;
    min-height : 100vh;
    background: ${props => props.welcome? "url('../../../img/welcome.jpg')" : "url('../../../img/people-laughing.jpg')"} no-repeat;
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
export const WindowDiv = styled.div`
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
    justify-content: space-between;
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
