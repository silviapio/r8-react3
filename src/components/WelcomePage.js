import { Link } from 'react-router-dom';
import {BackgroundDiv, StyledButton, WindowDiv} from './styles/styles';

export default () => {
    return(
        <BackgroundDiv welcome>
        <WindowDiv>
            <header style={{paddingBottom: "1rem"}}>Welcome and g'day!</header>
            <Link to="/joke"><StyledButton>Enter</StyledButton></Link>
        </WindowDiv>
        </BackgroundDiv>
    )
}