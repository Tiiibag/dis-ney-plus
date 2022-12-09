import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='./images/slider-badag.jpg'/>
      </Wrap>
      <Wrap>
        <img src='./images/slider-badging.jpg'/>
      </Wrap>
      <Wrap>
        <img src='./images/slider-scale.jpg'/>
      </Wrap>
      <Wrap>
        <img src='./images/slider-scales.jpg'/>
      </Wrap>
    </Carousel>
  )
}

export default ImageSlider


const Carousel = styled(Slider)`
    .slick-list{
        overflow: visible;
    }
    ul li button{
        &:before{
        font-size: 6px;
        color: rgb(150, 158, 171)
        }
    }
    li.slick-active button {
        &::before{
        color: white;
        }
    }
    button {
        z-index: -1;
    }
`
const Wrap = styled.div`
    cursor: pointer;
    img{
        border: 2px solid transparent;
        margin-top: 10px;
        width: 100%;
        height: 100%;
        border-radius: 6px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    }
    
    &:hover{
        border: 2px solid transparent;
    }
    
`
