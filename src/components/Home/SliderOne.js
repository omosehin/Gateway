import React from 'react';
import { withRouter } from "react-router";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import { content } from "../Shared/Slider";
import "../Shared/Animations.css";
import "../Shared/Styles.css";
 const SliderOne = props => {
    const goToSignUp = () => {
        const { history } = props;
        history.push("/Sign_Up");
      };

    return (
        <div>
        <Slider className="slider-wrapper" autoplay = {3}>
              {content.map((item, index) => (
                <div
                  key={index}
                  className="slider-content"
                  style={{
                    background: `url('${item.image}') no-repeat center center`
                  }}
                >
                  <div className="inner">
                    <h4 className="text-light">{item.title}</h4>
                    <p>{item.description}</p>
                    <button
                      className={
                        item.button === "BUY MORE" || item.button === "Buy now"
                          ? "d-none"
                          : "btn btn-info"
                      }
                      onClick = {goToSignUp}
                    >
                      {item.button}
                    </button>
                  </div>
                  <section>
                    <img src={item.userProfile} alt={item.user} />
                    <span>
                      Posted by <strong>{item.user}</strong>
                    </span>
                  </section>
                </div>
              ))}
            </Slider>
        </div>
    );
};
export default withRouter(SliderOne)