import PropTypes from "prop-types";
import styled from 'styled-components';

const List = styled.ul`
    li:first-letter{text-transform: capitalize;}
    li:not(:last-child){margin-bottom:${p => p.theme.space[4]}px;}
    span:not(:last-child){margin-right:${p => p.theme.space[3]}px;}
    `;
export const Statistics = ({good ,neutral, bad , total, percentage}) => {
    return (
            <List >
        <li>
            <span>good:</span>
            <span>{good ? good : 0 }</span>
        </li>
        <li>
            <span>neutral:</span>
            <span>{neutral ? neutral : 0}</span>
        </li>
        <li>
            <span>bad:</span>
            <span>{bad ? bad : 0}</span>
        </li>
          <li>
            <span>total:</span>
            <span>{total ? total : 0}</span>
        </li>
          <li>
            <span>positive feedback:</span>
            <span>{percentage ? percentage : 0}%</span>
        </li>            
    </List>
    )    

}

Statistics.propTypes = {
    good:PropTypes.number,
    neutral:PropTypes.number,
    bad:PropTypes.number,
    total:PropTypes.number,
    percentage:PropTypes.number
}
