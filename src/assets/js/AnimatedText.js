import React from 'react'
import styles from '../css/Animate.css';
import styled from 'styled-components';

const StylesText = styled.span`
    .letter {
        position: relative;
        opacity: 0;
        animation: move-text 0.5s forwards;
    }

    @keyframes move-text {
        0% { left: -0.4em; opacity: 0; }
        50% { left: 0.4em; opacity: 1; }
        100% { left: 0; opacity: 1; }
    }
`;


const AnimatedText = ({text, delay=0}) => {
    return (
        text.split('').map((c,i)=>(
            <StylesText aria-hidden="true" key={i} style={{
                animationDelay: (.1 + i / 10 + delay) + 's'
            }} className = "letter">{c}</StylesText>
        ))
    );
}

export default AnimatedText;