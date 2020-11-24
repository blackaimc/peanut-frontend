import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import '../../assets/css/main.css';
import {Link} from 'react-router-dom';

const HeaderBlock = styled.div`
    width : 100%;
    background-color : whtie;
    box-shadow : 0px 2px 4px rgba(0, 0, 0, 0.08);
    
`;

const Wraper = styled(Responsive)`
    height : 4rem;
    display : flex;
    align-items : center;
    justify-content : space-between;
    .logo{
        font-size : 1.125rem;
        font-width : 800;
        letter-spacing : 2px;
    }
    .right{
        display : flex;
        align-items : center;
    }
`;

const Space = styled.div`
    height : 4rem;
`;

const Button = styled.button`

    text-decoration: none;
    color: #ffffff;
    background-color: #4cdded;
    width: 200px;
    height: 60px;
    border-radius: 30px;
    align-items: center;
    display: inline-block;
    padding: 14px 40px;
    font-size: 16px;
    font-weight: 1;
    border: none;
    box-shadow: 0 2px 2px rgba(0, 79, 255, 0.3);
    transition: 0.5s;


&:hover{
    background-color: #174c52;
    box-shadow: 0;
    color: #d4d4d4;
    font-weight: lighter;
}

&:focus{
    outline : none;
}
`;

const Header = ({user, onLogout}) => {
    return(
        <>
            <HeaderBlock>
                <Wraper>
                    <Link to = "/" className = "logo">Team Peanut</Link>
                    {user ? (
                        <div className = "right">
                            <Button onClick={onLogout}>로그아웃</Button>
                        </div>
                    ):
                    (              
                        <div className = "right">
                            <Link to = "/login"><Button>로그인</Button></Link>
                        </div>
                    )}
                </Wraper>
            </HeaderBlock>
            <Space/>
        </>
    )
}
export default Header;