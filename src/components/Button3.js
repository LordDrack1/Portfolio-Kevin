import './Button3.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn---primary','btn--outline'];

const SIZES = ['btn--medium','btn--large'];

export const Button3 = ({
    children ,
    type ,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

    return (
        <a data-easing="linear" href='#contacts' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>            
        </a>
    )
}