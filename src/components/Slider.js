import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FemaleImage from '../Assets/imageb.png'
import basil from '../Assets/basil.jpg'
import adolescent from '../Assets/adolescent.jpg'
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
        <div>
            <img src={basil} alt="imh" height='400px'/>
          </div>
          <div>
          <img src={adolescent} alt="nn" height='400px'/>
          </div>
                    
           </Slider>
      </div>
    );
  }
}