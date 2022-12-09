import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Logo src="./images/logo.svg" />
      <Div>
      <NavMenu>
        <a><img src='images/home-icon.svg'/><span>HOME</span></a>
        <a><img src='images/search-icon.svg'/><span>SEARCH</span></a>
        <a><img src='images/watchlist-icon.svg'/><span>WATCHLIST</span></a>
        <a><img src='images/original-icon.svg'/><span>ORIGINALS</span></a>
        <a><img src='images/movie-icon.svg'/><span>MOVIES</span></a>
        <a><img src='images/series-icon.svg'/><span>SERIES</span></a>
      </NavMenu>
      </Div>
      <UserImg src="images/307CCA00-7883-492F-89E1-CEF1E202F49D_1_105_c.jpeg" />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    margin: 0;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
    overflow-x: hidden;

`
const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin: 0 15px;
    align-items: center;
    cursor: pointer;


    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
          height: 20px;
          }
        span{
            font-size: 12px;
            letter-spacing: 1.2px;
            padding: 4px 0;
            position: relative;

            &:after{
              content: "";
              height: 2px;
              background: white;
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              opacity: 0;
              transform-origin: left center;
              transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s;
              transform: scaleX(0);
            }

        }
        &:hover{
          span:after{
            transform: scaleX(1);
            opacity: 1;
          }
        }
       
    }
    
`
const UserImg = styled.img`
    width:  40px;
    height: 40px;
    border-radius: 50%;
`
const Div = styled.div`

`