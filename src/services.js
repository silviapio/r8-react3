import axios from 'axios';

let fetchJoke = () => {
    return axios.get("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    });
};

export default fetchJoke;