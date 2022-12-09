import React from 'react'
import styled from 'styled-components';

function Detail() {
  return (
    <Container>
            <Background>
                <img src='images/spongebbbb.jpg' />
            </Background>
            <ImgTitle>
                <img src='images/icons8-spongebob-squarepants.svg'/>
            </ImgTitle>
            <Controls>
                <PlayBtn>
                    <img src='images/play-icon-black.png' /><span>PLAY</span>
                </PlayBtn>
                <TrailerBtn>
                    <img src='images/play-icon-white.png' /><span>TRAILER</span>
                </TrailerBtn>
                <AddBtn>
                    <img src='images/watchlist-icon.svg' /><span></span>
                </AddBtn>
                <Groupwatch>
                    <img src='images/group-icon.png' /><span></span>
                </Groupwatch>
            </Controls>
            <Subtitle>
                2018 . 7m . Family . Fantasy . Kids . Animation
            </Subtitle>
            <Description>
                ipsum dolor sit amet consectetur adipisicing elit. 
                Vero error accusamus excepturi illo incidunt! Ad, dolore neque perspiciatis repudiandae sequi reiciendis architecto ducimus. Alias reprehenderit fugit aut. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero error accusamus excepturi illo incidunt! Ad, dolore neque perspiciatis repudiandae sequi reiciendis architecto ducimus. Alias reprehenderit fugit aut. Quis, error adipisci!
                Quis, error adipisci! 
            </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    // min-height: 100vh;
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    
`
const Background = styled.div`
    position: fixed;
    top: 70px;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Controls = styled.div`
    position: absolute;
    display: flex;

`
const PlayBtn = styled.div`
    border: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    letter-spacing: 1.82px;
    height: 40px;
    font-size: 15px;
    padding: 0 10px;
    background: #3E6D9C;
    margin-right: 22px;
    color: black;
    cursor: pointer;

    &:hover{
        background: rgba(245, 248, 254, 0.7);    
    }
`
const TrailerBtn = styled(PlayBtn)`
    color: white;
    background: #1C2938;
    opacity: 0.8;
    margin-right: 16px;

    &:hover{
        background:  rgb(249, 249, 249, 0.8);  
        color: black;  
    }

`
const AddBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid white;
    margin-right: 16px;
    height: 38px;
    width: 38px;
    background-color:  rgba(0, 0, 0, 0.8);  
    font-size: 15px;
    color: black;
    cursor: pointer;


    img{
        height: 20px;
        }
`
const Groupwatch = styled(AddBtn)`
    img{
        height: 25px;
        }

`
const ImgTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 60px;
   

    img{
        // width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Subtitle = styled.div`
    color: white;
    width: 350px;
    font-weight: 600;
    font-size: 15px;
    margin-top: 50px;
    background: rgba(0, 0, 0, 0.4);
    background-color:  rgba(0, 0, 0, 0.8);  
    padding: 2px;
`
const Description = styled.div`
    color: rgb(249, 249, 249);
    font-weight: 500;
    max-width: 760px;
    line-height: 1.4;
    margin-top: 10px;
    background-color:  rgba(0, 0, 0, 0.3);  
    
`