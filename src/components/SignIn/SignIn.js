
import React,{useState} from "react";
import {withRouter} from 'react-router-dom'
import { Container,Row, Col, Button } from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Sign_In from '../../Assets/sign-in.svg'
import "../SignUp/Register.css";
const MainRegister = props => {
  const [values, setValues] = useState({}) 
  const [showSignUp, setshowSignUp] = useState('false')

  const openSignUpPage = ()=>{
      setshowSignUp(showSignUp ==='false' ?'true':'false')
  }
  let drawerClasses =showSignUp ==='true'  ? "sign-drawer open" : "sign-drawer";

  const handleChange = (e) =>{
    setValues([e.target.name]: (e.target.value))
  }
 
  const handleSubmit = (e) =>{
      e.preventDefault()
  }
  
  return (
    <div>
    <Container>
        <Row className="UserContainer">
          <Col lg="6" sm="12" className="loginImage2">
            <div className="signUptext">
              <strong>WELCOME BACK</strong>
            </div>
            <Button
                color="info"
                className="jumbotronButton"
                onClick ={openSignUpPage}
              >
                Sign In
              </Button>
          </Col>
          
          {showSignUp ==='true' &&
 <Col lg="6" sm="12"className={drawerClasses && 'formCol'}
>
          <div className='text-center'>
      <img src = {Sign_In} alt = 'register' width = {50} height={50} className ='mt-3'/>
      <p className = 'text-white'>Where things happen</p>
      </div>
      
 <Form onSubmit = {handleSubmit}>
      <FormGroup>
             <Label className = 'mt-3' for="email">Email</Label>   
          <Input 
            type="email" 
            name="email" 
            id="email"
            value = {values.email || ''}
            placeholder="Email"
            OnChange={handleChange}
            required
            className = 'input'
             />
             <Label className = 'mt-3' for="password">Password</Label>   
          <Input 
            type="password" 
            name="password1" 
            id="password"
            value = {values.password || ''}
            placeholder="Password"
            OnChange={handleChange}
            required
            className = 'input'
             />
             </FormGroup>       
      
      <Input
             value={'Sign In'}
             className = 'mt-5 submit'
             type="submit" 
             onClick = {handleSubmit}
             />
          </Form>
         
          </Col>}
        </Row>
      </Container>
     
       
      
    </div>
  );
};

export default withRouter(MainRegister);
