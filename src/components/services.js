import axios from 'axios';

export const fetchJoke = () => {
    return axios.get("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    });
};

export const fetchWeather = (city, apiKey) => {
    return axios.get("http://api.openweathermap.org/data/2.5/weather" , {
        params: {
            q: city,
            appid: apiKey
        }
    });
};