import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default (props) => {
    const [ weatherText, setWeatherText ] = useState("");
    const weatherID = "500a5cfb8db5ea91e3d49a9f8bee71c0";
    
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