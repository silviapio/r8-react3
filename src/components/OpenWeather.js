import {useState, useEffect} from 'react';
import { fetchWeather } from './services.js';
import weatherID from '../privateKeys.js';

export default ({city}) => {
    const [ weatherText, setWeatherText ] = useState("");
    
    useEffect(() => {
        fetchWeather(city, weatherID).then((response) => {
            console.log(response);
            setWeatherText (`Today in ${city}: ${response.data.weather[0].description} :)`);
        });
        }, [city]);
    
    return(
        <p>{weatherText}</p>
    );
}