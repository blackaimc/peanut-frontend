import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-image: url('https://i.imgur.com/9jjBXhA.jpg');
  background-color : rgba(0, 0, 0, 0.25);
  background-repeat : no-repeat;
  background-size : cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align : center;

`;


const WhiteBox = styled.div`

    .logo-area{
        text-align : center;
        display : block;
        padding-bottom : 2rem;
        text-align : center;
        font-weight : bold;
        letter-spacing : 2px;
        text-decoration: none;
    }
    box-shadow : 0 0 8px rgba(0, 0, 0, 0.025);
    padding : 2rem;
    width : 420px;
    background : white;
    border-radius : 2px;
    text-decoration: none;
    
`;



const AuthTemplate = ({children}) => {
    return(
        <AuthTemplateBlock>
            <WhiteBox>
                <div className = "logo-area">
                    <Link to = "/">Team Peanut</Link>
                </div>
                {children}
            </WhiteBox>
                
        </AuthTemplateBlock>
    )
}
export default AuthTemplate;