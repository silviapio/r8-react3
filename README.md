# r8-react3
## Level 1
### Ex 1
Setup a basic react app: on the first screen there is a button Next that when clicked, calls an API (https://icanhazdadjoke.com/) and returns a joke. Each click displays a new joke. The API is called by parent component App, and the text of the joke is passed as a prop to the child component Joke.
## Level 2
### Ex 2
Style the project. The styling is done using styled-components.
## Level 3
### Ex 3
Call an API to return the current weather forecast. The API used is Openweather; the call is made by a child component (OpenWeather) that get passed the city from parent component App as a prop. 
### Ex 4
A welcome window is shown when loading the page. This is done rendering a new component WelcomePage, rendered by default; when the user clicks the button Enter, the other component, JokePage, is rendered (conditional rendering).
### Ex 5
The switch between the welcome page and the joke page is the same, but it is done using react-router.
