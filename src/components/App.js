import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import JokePage from './JokePage';

export default () => {
    return (
        <Router>
            <Switch>
            <Route path={"/"} exact component={WelcomePage}></Route>
            <Route path={"/joke"} component={JokePage}></Route>
            </Switch>
        </Router> 
    );
};