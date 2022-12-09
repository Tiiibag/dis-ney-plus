import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended for you</h4>
        <Content>
        <Wrap>
            <img src='/images/SquarePants_Chara.jpg'/>
        </Wrap>
        <Wrap>
            <img src='./images/format-arw-PXjQaGxi4JA-unsplash.jpg'/>
        </Wrap>
        <Wrap>
            <img src='./images/fifty-shades-freed-review.jpg'/>
        </Wrap>
        <Wrap>
            <img src='./images/Justice_League_Vol_4_23_Textless_Variant.webp'/>
        </Wrap>
        <Wrap>
            <img src='./images/coco.webp'/>
        </Wrap>
        <Wrap>
            <img src='./images/theflas.jpg'/>
        </Wrap>
        <Wrap>
            <img src='./images/psbreak.webp'/>
        </Wrap>
        <Wrap>
            <img src='./images/erik-mclean-7sgU1jV8-iw-unsplash.jpg'/>
        </Wrap>
        </Content>
    </Container>
  )
}
export default Movies

const Container = styled.div`
    
`
const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 25px;
`
const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    &:hover{
        transform: scale(1.02);
        border-color: rgba(249,249, 249, 0.8);
    }
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s;
    cursor: pointer;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`