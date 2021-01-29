import React, { useState } from "react";
import axios from 'axios';
import WelcomePage from './WelcomePage';
import JokePage from './JokePage';
import Joke from "./Joke";
import OpenWeather from "./OpenWeather";
import {BackgroundDiv} from './styles/styles';

export default () => {
    
    const [onWelcomePage, setPage] = useState(false);
    

    

    return (
        <BackgroundDiv welcome={onWelcomePage}>
            {onWelcomePage ?
                    <WelcomePage /> :
                    <JokePage />
            }
        </BackgroundDiv>
    );
};