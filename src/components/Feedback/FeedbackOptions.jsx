import PropTypes from "prop-types";
import styled from 'styled-components';

const List = styled.ul`
list-style:none;
padding-left:0;
display:flex;
& li{
    :not(:last-child){margin-right:${p => p.theme.space[4]}px};
}`

const Button = styled.button`
    font-size:${p => p.theme.fontSizes.m};
    padding:4px 12px;
    border-radius:${p => p.theme.radii.normal};
    background-color:inherit;
    cursor:pointer;
    text-transform: capitalize;
    :hover,focus{
        background-color:${p => p.theme.colors.darkGrey};
    }
`;

export const FeedbackOptions = ({options, onLeaveFeedback }) => {

return ( <List>
                    {options.map(option => <li 
                    
                            key={option}><Button    
                            name={option}
                            onClick={ onLeaveFeedback}>{option}
                    </Button></li> )}
            </List>
    )
}

FeedbackOptions.propTypes = {
    options:PropTypes.array,
    onLeaveFeedback:PropTypes.func
}



