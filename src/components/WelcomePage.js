import { Link } from 'react-router-dom';
import {BackgroundDiv, StyledButton, WindowDiv} from './styles/styles';

export default () => (
    < BackgroundDiv welcome >
        <WindowDiv>
            <header>Welcome and g'day!</header>
            <Link to="/joke"><StyledButton>Enter</StyledButton></Link>
        </WindowDiv>
        </BackgroundDiv >
);