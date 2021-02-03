import {BackgroundDiv, StyledButton, WindowDiv} from './styles/styles';

export default (props) => {
    return(
        <BackgroundDiv welcome={props.welcome}>
        <WindowDiv>
            <header>Welcome and g'day!</header>
            <StyledButton onClick={props.onEnterClick}>Enter</StyledButton>
        </WindowDiv>
        </BackgroundDiv>
    )
}