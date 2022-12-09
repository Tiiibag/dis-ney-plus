import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
        <CTA>
            <CtalogoI src='./images/cta-logo-one.svg' />
            <SignUp> Get All There </SignUp>
            <Description>
                ipsum dolor sit amet consectetur adipisicing elit. 
                Vero error accusamus excepturi illo incidunt! Ad, dolore neque perspiciatis repudiandae sequi reiciendis architecto ducimus. Alias reprehenderit fugit aut. 
            </Description>
            <CtaLogoII src='./images/cta-logo-two.png' />
        </CTA>
    </Container>
  )
}



export default Login

const Container = styled.div`
    height: calc(100vh - 70px);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;



    &:before{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      content: "";
      background-image: url("./images/login-background.jpg");
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: -1;
      // opacity: 0.8;
    }
`

const CTA = styled.div`
    max-width: 760px;
    padding: 60px 40px;
    margin-top: -50px;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const CtalogoI = styled.img`

`
const SignUp = styled.div`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 15px 0;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    letter-spacing: 1.5px;
    cursor: pointer;
    margin-top: 8px;
    margin-bottom: 12px;
    transition: all 250ms;

    &:hover {
      backgroud: #0483ee;
    }
`
const CtaLogoII = styled.img`
    width: 750px;
    margin-top: 10px;

`
const Description =styled.div`
    text-align: center;
    line-height: 1.5;
    letter-spacing: 1.5px;
    
`