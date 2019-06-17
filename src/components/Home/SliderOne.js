import React from 'react';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import { content } from "../Shared/SliderOne";
import "../Shared/Animations.css";
import "../Shared/Styles.css";
import facebook from '../../Assets/facebook.png'
import playstore from '../../Assets/facebook.png'
import cancel from '../../Assets/facebook.png'
 const SliderOne = props => {

    return (
        <div>
          <Slider className="slider-wrapper" autoplay = {5} height='50px'>
                <div>
                    <img src={facebook} alt="logo" width='50' />)
                    <img src={playstore} alt="logo" width='50'  />)
                    <img src={cancel} alt="logo" width='50'  />)
                </div>
            </Slider>
        </div>
    );
};
export default SliderOne