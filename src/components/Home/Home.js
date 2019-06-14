import React from "react";
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Button
} from "reactstrap";
import SliderOne from "./SliderOne";
import SliderTwo from "./SliderTwo";
import Tote from "../../Assets/Tote-bag.png";
import Book from "../../Assets/Book.png";
import Snap from "../../Assets/Snap.png";
import Crop from "../../Assets/Crop.png";
import Mug from "../../Assets/Mug.png";
import iPhone from "../../Assets/iPhone.png";
import Footer from '../Shared/Footer/Footer'
import "./Home.css";
const Home = props => {
  const goToSignUp = () => {
    const { history } = props;
    history.push("/Sign_Up");
  };
  return (
    <div>
      <main className="">
        <div className="overlay">
          <Jumbotron fluid className="HomeContainer">
            <Container>
              <h1 className="text-light landingPageHeading ">
                Where technology thrives
              </h1>
              <p className="lead text-light mt-3 text-center">
                Doing extraOrdinary things
              </p>
              <Button
                color="info"
                className="jumbotronButton"
                onClick={goToSignUp}
              >
                Sign Up
              </Button>
            </Container>
          </Jumbotron>
        </div>
        <Container>
          <Row className="mt-3">
            <Col>
              <p className="homeHeader">Check out the latest technology</p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm="6" lg="4" className="mt-3">
              <SliderOne />
            </Col>
            <Col sm="6" lg="4" className="mt-3">
              <SliderTwo />
            </Col>
            <Col sm="6" lg="4" className="mt-3">
              <SliderTwo />
            </Col>
          </Row>
        </Container>
        <Jumbotron fluid className="ThirdContainer">
          <Container>
            <Row>
              <Col sm="6" lg={{ size: "auto", offset: 1 }}>
                <img className="" src={Tote} alt="img" />
              </Col>
              <Col sm="6" lg={{ size: "auto", offset: 4 }}>
                <img className="" src={Crop} alt="img" />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col sm="6" lg="3">
                <img src={Mug} alt="Mug" />
              </Col>
              <Col sm="6" lg="6">
                <div>
                  <h1 className="text-center">
                    The Largest Collection of <br /> Mockups on the Internet!
                  </h1>
                  <p className="text-center">
                    We don’t just have the largest library.
                    <br />
                    We’re also the easiest way to make mockups.
                    <br />
                    Just drop your design in & we’ll generate the mockup!
                  </p>
                  <div class="col text-center">
                    <Button color="info" className="text-center">
                      Check Our User
                    </Button>
                  </div>
                </div>
              </Col>

              <Col sm="6" lg="3">
                <img src={iPhone} alt="Mug" />
              </Col>
            </Row>

            <Row className="mt-5">
              <Col sm="6" lg={{ size: "auto", offset: 1 }} class>
                <img className="" src={Book} alt="img" />
              </Col>
              <Col sm="6" lg={{ size: "auto", offset: 4 }}>
                <img className="" src={Snap} alt="img" />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
