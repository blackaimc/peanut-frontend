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

const Header = ({user, onLogout}) => {
    return(
        <>
            <HeaderBlock>
                <Wraper>
                    <Link to = "/" className = "logo">Team Peanut</Link>
                    {user ? (
                        <div className = "right">
                            <button onClick={onLogout}>로그아웃</button>
                        </div>
                    ):
                    (              
                        <div className = "right">
                            <Link to = "/login"><button>로그인</button></Link>
                        </div>
                    )}
                </Wraper>
            </HeaderBlock>
            <Space/>
        </>
    )
}
export default Header;