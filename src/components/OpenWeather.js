import React, {useState, useEffect} from 'react';
import axios from 'axios';
import weatherID from '../privateKeys.js';

export default ({city}) => {
    const [ weatherText, setWeatherText ] = useState("");
    
    useEffect(() => {
        axios.get("http://api.openweathermap.org/data/2.5/weather" , {
            params: {
                q: city,
                appid: weatherID
            }
        }).then((response) => {
            console.log(response);
            setWeatherText (`Today in ${city}: ${response.data.weather[0].description} :)`);
        });
    }, [city]);
    
    return(
        <p>{weatherText}</p>
    );
}