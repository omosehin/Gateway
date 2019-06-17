import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Row, Col, Card, CardBody } from "reactstrap";
import { AnimateOnChange, HideUntilLoaded } from "react-animation";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import Bounce from 'react-reveal/Bounce';
import LightSpeed  from 'react-reveal/Flip';

// import { AnimateOnChange } from 'react-animation';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import atm from "../../Assets/atm.png";
import googlePlay from "../../Assets/google-play-store.png";
import appStore from "../../Assets/appStore.png";
import facebook from "../../Assets/facebook.png";
import menu from "../../Assets/menu.svg";
import Slider from "../Slider";
// import Flip from 'react-reveal/Flip';
import { Slide, Zoom, Flip } from "react-toastify";
import DrawerToggleButton from "../Navigation/SideDrawer/DrawerToggleButton";
import Cross from "../../Assets/cross-out.png";
import basket from "../../Assets/basket.png";
import "./Home.css";

const Home = () => {
  const [color, setcolor] = useState("white");
  const [backgroundColor, setbackgroundColor] = useState("");
  const [display, setdisplay] = useState("none");
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);
  const [contact, setContact] = useState(false)

  const words = [
    "Welcome...",
    "Shop,Chop and Pay",
    "You can Shop...",
    "EasyShop",
    "You can Chop...",
    "EasyChop",
    "You can pay...",
    "Easy Pay",
    "We get it over to your doorstep"
  ];
  const openToggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    setShow(show);
  }, [show]);

useEffect(()=>{
  const getDiv = document.getElementById('contactus')
  if(getDiv){
setContact(true)
  }
},[contact])

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === words.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    const listenScrollEvent = e => {
      if (window.scrollY > 500) {
        setcolor("white");
      } else {
        setcolor("white");
      }
    };
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      // removeEventListener(listenScrollEvent)
    };
  }, [color]);

  useEffect(() => {
    const listenScrollEvent = e => {
      if (window.scrollY < 500) {
        setdisplay("none");
      } else {
        setdisplay("inline");
      }
    };
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [display]);

  useEffect(() => {
    const listenScrollEvent = e => {
      if (window.scrollY > 500) {
        setbackgroundColor("green");
      } else {
        setbackgroundColor("transparent");
      }
    };
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      // removeEventListener(listenScrollEvent)
    };
  }, [backgroundColor]);

  const notify = () => toast("SHOP CHOP AND PAY !", { containerId: "A" });
  const easyPay = () => toast("Easy Pay !", { containerId: "B" });

  useEffect(() => {
    notify();
    return () => {};
  }, []);

  useEffect(() => {
    if (window.scrollY > 300) {
      easyPay();
    }
    return () => {};
  }, []);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <header className="icon" style={{ display: display }}>
        <ul className="">
          <li>
            <a target="_blank" href="http://facebook.com">
              <span className="fa fa-facebook-square" />
            </a>
          </li>
          <li>
            <a target="_blank" href="http://instagram.com">
              <span className="fa fa-instagram" />
            </a>
          </li>
          <li>
            <a target="_blank" href="http://twitter.com">
              <span className="fa fa-twitter-square" />
            </a>
          </li>
          <li>
            <a target="_blank" href="http://linkedin.com">
              <span className="fa fa-linkedin-square" />
            </a>
          </li>
        </ul>
      </header>
      <main className="mt-5">
        <Jumbotron fluid className="HomeContainer align-items-center">
          {show === true && (
            <header className="mobileToolbar">
              <nav className="mobileToolbar__navigation" onClick={handleClose}>
                <div className="mobileToolbar_navigation-items">
                  <ul style={{ color: color }}>
                    <li>
                      <a href="#easypay" style={{ color: color }}>
                        EASYPAY
                      </a>
                    </li>

                    <li>
                      <a href="#shopeasy" style={{ color: color }}>
                        SHOPEASY
                      </a>
                    </li>
                    <li>
                      <a href="#chopeasy" style={{ color: color }}>
                        CHOPEASY
                      </a>
                    </li>
                    <li>
                      <a href="#contactus" style={{ color: color }}>
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>
          )}

          <header
            className="toolbar"
            style={{ backgroundColor: backgroundColor }}
          >
            <nav className="toolbar__navigation">
              <div className="toolbar__logo">
                <a href="/" style={{ color: color}}>
                  EASYPAY
                </a>
              </div>
              <div className="spacer" />
              <div className="toolbar_navigation-items">
                <ul style={{ color: color }}>
                  <div className="d-flex">
                    <li>
                      <a href="#aboutus" style={{ color: color }}>
                        ABOUT US
                      </a>
                    </li>
                  </div>

                  <div className="d-flex">
                    <li>
                      <a href="#easypay" style={{ color: color }}>
                        EASYPAY
                      </a>
                    </li>
                  </div>

                  <li>
                    <a href="#shopeasy" style={{ color: color }}>
                      SHOPEASY
                    </a>
                  </li>
                  <li>
                    <a href="#chopeasy" style={{ color: color }}>
                      CHOPEASY
                    </a>
                  </li>
                  <li>
                    <a href="#contactus" style={{ color: color }}>
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
              <div className="toolbar__toggle-button">
                {<DrawerToggleButton click={openToggle} />}
              </div>
            </nav>
          </header>
          <Container>
            <Row className=" align-items-center">
              <div>
                <ToastContainer
                  autoClose={false}
                  transition={Zoom}
                  enableMultiContainer
                  containerId={"A"}
                  position={toast.POSITION.BOTTOM_CENTER}
                />
                <ToastContainer
                  autoClose={3000}
                  transition={Slide}
                  enableMultiContainer
                  containerId={"B"}
                  position={toast.POSITION.BOTTOM_CENTER}
                />
              </div>
              <Col lg="6" className="topText">
                {/* <Fade top cascade>
                    <Col sm="12">
                      <h1 className="headingTitle1 mt-5">EASY PAY</h1>
                    </Col>
                  </Fade>
                  <Fade left cascade>
                    <Col sm="12">
                      <h1 className="headingTitle2 mt-5">CHOP EASY</h1>
                    </Col>
                  </Fade>
                  <Fade right cascade>
                    <Col sm="12">
                      <h1 className="headingTitle3 mt-5">SHOP EASY</h1>
                    </Col>
                  </Fade> */}
                <div className="headerAnimation text-light mt-5 text-center">
                  <AnimateOnChange>{words[current]}</AnimateOnChange>
                </div>
              </Col>
              <Col lg="6">
              <Bounce bottom duration={3000}>
                <img src={basket} alt="basket" className="basket" />
              </Bounce>
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Container id="" className="" id="aboutus">
          <Row className="TopContainer">
            <Col>
              <h1 className="homeHeader text-center">ABOUT OUR PRODUCT</h1>
            </Col>
          </Row>
          <Row className="">
            <Col sm="12" lg="4" className="mt-3">
              <div className=" w-100 p-3">
                <div className="">
                  <img src={atm} alt="atm" width="40" className="mt-3 ml-3" />
                </div>

                <div className="ml-3 mb-0 mt-3">Easy Pay</div>
                <p className="p-3 text-justify text-primary mt-0">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, officiis, tempora odio ad sed tenetur labore sequi
                  dicta.
                </p>
              </div>
            </Col>

            <Col sm="12" lg="4" className="mt-3">
              <Card className="shadow-sm w-100 p-3">
                <div className="text-center">
                  <img src={atm} alt="atm" width="40" className="mt-3" />
                </div>
                <div className="text-center">Chipmezes</div>
                <p className="p-3 text-justify text-primary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, officiis, tempora odio ad sed tenetur labore sequi
                  dicta.
                </p>
              </Card>
            </Col>
            <Col sm="12" lg="4" className="mt-3">
              <div className=" w-100 p-3">
                <div className="">
                  <img src={atm} alt="atm" width="40" className="mt-3  ml-3" />
                </div>
                <div className=" mb-0 mt-3 ml-3">ShopEasy</div>
                <p className="p-3 text-justify text-primary mt-0">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, officiis, tempora odio ad sed tenetur labore sequi .
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="align-items-center">
            <Col lg="12">
              <h1 className="text-center homeHeader">EASY PAY</h1>
            </Col>
            <Col lg="6" className="chopImage mt-5" id="easypay" />
            <Col lg="6">
              <div>
                {" "}
                <h2 className=" mt-3">Payment with Ease</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br /> Hic ipsa modi aliquam ut repudiandae vel rerum.
                  Perferendis.
                </p>
              </div>
              <div className="d-flex justify-content-around">
                <img src="https://img.icons8.com/ios/50/000000/visa.png" />
                <img
                  alt="card"
                  title="card"
                  src="http://www.mlsisland.com/Logos/cc-animated.gif"
                  border="0"
                />
                <img src="https://img.icons8.com/ios/50/000000/visa.png" />
                <img src="https://img.icons8.com/ios/50/000000/visa.png" />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="">
          <Row className="mt-3 align-items-center">
            <Col lg="12" className="text-center" id="shopeasy">
              <h1 className="homeHeader text-center">SHOP EASY</h1>
            </Col>

            <Col lg="4">
              <Rotate top left cascade>
                <div>
                  <ul className="list1 mt-5">
                    <li className="mt-3">
                      error deserunt magni impedit tenetur laboriosam{" "}
                    </li>
                    <li className="mt-3">
                      error deserunt magni impedit tenetur laboriosam{" "}
                    </li>
                    <li className="mt-3">
                      error deserunt magni impedit tenetur laboriosam{" "}
                    </li>
                  </ul>
                </div>
              </Rotate>

              <div>
                <ul className="d-flex justify-content-around list-unstyled">
                  <div>
                    <li>
                      {" "}
                      <a href="/Playstore.com">
                        <img src={googlePlay} alt="playstore" width="150" />
                      </a>
                    </li>
                  </div>
                  <div>
                    <li>
                      {" "}

                      <a href="/appstore.com">
                        <img src={appStore} alt="facebook" width="150" />
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </Col>
            <Col lg="8" className="chopImage mt-4 mb-4">
              <p className="text-light text-center">Order your food Now</p>
            </Col>
          </Row>
        </Container>

        <Container className="">
          <Row className=" align-items-center">
            <Col lg="12" className="text-center" id="chopeasy">
              <h1 className="homeHeader text-center">CHOP EASY</h1>
            </Col>
            <Col lg="8" className="chopImage mt-4 mb-4">
              <p className="text-light text-center">Order your food Now</p>
            </Col>

            <Col lg="4">
              <Rotate top left cascade>
                <div>
                  <ul className="list1 mt-5">
                    <li className="mt-3">
                      error deserunt magni impedit tenetur laboriosam{" "}
                    </li>
                    <li className="mt-3">
                      error deserunt magni impedit tenetur laboriosam{" "}
                    </li>
                    <li className="mt-3">
                      error deserunt magni impedit tenetur laboriosam{" "}
                    </li>
                  </ul>
                </div>
              </Rotate>

              <div>
                <ul className="d-flex justify-content-around list-unstyled">
                  <div>
                    <li>
                      {" "}
                      <a href="/Playstore.com">
                        <img src={googlePlay} alt="playstore" width="150" />
                      </a>
                    </li>
                  </div>
                  <div>
                    <li>
                      {" "}
                      <a href="/appstore.com">
                        <img src={appStore} alt="facebook" width="150" />
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row className="mt-3 mb-3 ">
            <Col lg="12" id="contactus">
              <h1 className="text-center homeHeader contactus">CONTACT US</h1>
            </Col>
          </Row>
             <Bounce  when ={contact ===true}duration={3000} top><Row>
              <Col
                lg="4"
                className="mb-3 d-flex flex-row justify-content-around border-right"
              >
                <div>
                <img src="https://img.icons8.com/pastel-glyph/64/000000/online-support.png"/>
                </div>

                  <div>
                    <p className='mb-0 font-weight-bold'>08134386025</p>
                     <p className="websitelink">24/7 Available Support</p>
                  </div>
              </Col>
              <Col
                lg="4"
                className="mb-3 d-flex flex-row justify-content-around border-right"
              >
                <div>
                <img src="https://img.icons8.com/ios/50/000000/cash-in-hand.png"/>
                  </div>

                  <div>
                  <p className='mb-0 font-weight-bold'>Money Back Guarantee</p>

                    <p className="websitelink"> 24hrs Money Guarantee</p>
                  </div>
              </Col>
              <Col
                lg="4"
                className="mb-3 d-flex flex-row justify-content-around"
              >
                <div>
                <img src="https://img.icons8.com/ios/50/000000/internet.png" />
                  </div>

                  <div>
                  <p className='mb-0 font-weight-bold'>Visit</p>

                    <a className="websitelink" href="http://www.geteasypay.ng">
                      www.geteasypay.ng
                    </a>
                  </div>
              </Col>
              <Col lg ='12'><p className='text-center mt-2'>Built by NCK Technology © 2019</p></Col>
          </Row></Bounce >
        </Container>
      </main>
      <footer className="smallScreenicon mb-0">
        <ul className="d-flex flex-row">
          <li>
            <a target="_blank" href="http://facebook.com">
              <span className="fa fa-facebook-square" />
            </a>
          </li>
          <li>
            <a target="_blank" href="http://instagram.com">
              <span className="fa fa-instagram" />
            </a>
          </li>
          <li>
            <a target="_blank" href="http://twitter.com">
              <span className="fa fa-twitter-square" />
            </a>
          </li>
          <li>
            <a target="_blank" href="http://linkedin.com">
              <span className="fa fa-linkedin-square" />
            </a>
          </li>
        </ul>
      </footer>
      {/* <Footer/> */}
    </div>
  );
};
export default Home;
