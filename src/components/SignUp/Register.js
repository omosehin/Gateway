
import React,{useState} from "react";
import { Container, Jumbotron, Row, Col, Button } from "reactstrap";
import MainRegister from './index.js'
import "./Register.css";
import '../Navigation/SideDrawer/SideDrawer.css'
const Register = props => {
  const [showSignUp, setshowSignUp] = useState('false')

  const openSignUpPage = ()=>{
      setshowSignUp(showSignUp ==='false' ?'true':'false')
  }
  let drawerClasses =showSignUp ==='true'  ? "sign-drawer open" : "sign-drawer";

  return (
    <div>
      
      <Container>
        <Row className="UserContainer">
          <Col lg="6" sm="12" className="loginImage">
            <p className="signUptext">
              Sign-Up <br/>to enjoy unlimited access
            </p>
            <Button
                color="info"
                className="jumbotronButton"
                onClick ={openSignUpPage}
              >
                Sign Up Now
              </Button>
          </Col>
          {showSignUp ==='true' &&
          <Col lg="6" sm="12" 
            className={drawerClasses && 'formCol'}

            >
         <MainRegister
         />
          </Col>}
        </Row>
      </Container>
    </div>
  );
};

export default Register;
