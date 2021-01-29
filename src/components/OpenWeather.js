import React, {useState, useEffect} from 'react';
import axios from 'axios';
import weatherID from '../privateKeys.js';

export default (props) => {
    const [ weatherText, setWeatherText ] = useState("");
    
    useEffect(() => {
        axios.get("http://api.openweathermap.org/data/2.5/weather" , {
            params: {
                q: props.city,
                appid: weatherID
            }
        }).then((response) => {
            console.log(response);
            setWeatherText (`Today in ${props.city} we have ${response.data.weather[0].description} :)`);
        });
    });
    
    return(
        <p>{weatherText}</p>
    );
}