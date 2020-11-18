import React from 'react';
import styled, {css} from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
    border : none;
    border-radius : 4px;
    font-size : 1rem;
    font-weight : bold;
    padding : 0.25rem 1rem;
    color : white;
    outline : none;
    cursor : pointer;
    background : ${palette.gray[8]};
    &:hover{
        background: ${palette.gray[6]}
    }

    ${props =>
        props.fullWidth &&
        css`
            padding-top : 1.25rem;
            padding-bottom : 1.25rem;
            width : 100%;
            height : 1%;
            outline : none;
            line-height : 50%;
            font-size : 1.125rem;
            color : white;
        `
    }
    ${props =>
        props.cyan &&
        css`
            background : ${palette.cyan[5]};
            color : white;
            &:hover{
                background : ${palette.cyan[4]};
                color : white;
            }
        `}
    `;    

const Button = props => <StyledButton {...props} />

export default Button;