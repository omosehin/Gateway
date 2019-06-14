
import React,{useState} from "react";
import {withRouter} from 'react-router-dom'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container,Row, Col, Button } from "reactstrap";
import useForm from './useForm';
import validate from '../Shared/Validation'
import Sign_In from '../../Assets/sign-in.svg'
import "../SignUp/Register.css";

const MainRegister =(props)=> {
  const {errors,values,resetData,handleChange, handleSubmit} = useForm(login,validate);
  const [showSignUp, setshowSignUp] = useState('false')
  const [isSubmited,setIsSubmited] = useState('false')

  
  function login() {
    let data = values;
     console.log(data)
     resetData()

  }
  const gotoPassword = ()=>{
    props.history.push('/Forgot_Password')
  }

  const openSignUpPage = ()=>{
      setshowSignUp(showSignUp ==='false' ?'true':'false')
  }
  let drawerClasses =showSignUp ==='true'  ? "sign-drawer open" : "sign-drawer";

  
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
      
 <Form onSubmit = {handleSubmit} noValidate>
      <FormGroup>
             <Label className = 'mt-3' for="email">Email</Label>   
          <Input 
            type="email" 
            name="email" 
            id="email"
            value = {values.email || ''}
            placeholder="Email"
            onChange={handleChange}
            className ='input'
             />
             {errors.email && (<p className="danger">{errors.email}</p>
  )}             <Label className = 'mt-3' for="password">Password</Label>   
          <Input 
            type="password" 
            name="password" 
            id="password"
            value = {values.password || ''}
            placeholder="Password"
            onChange={handleChange}
            className = 'input'
             />
             {errors.password && (<p className="danger">{errors.password}</p>)}

             </FormGroup> 
                   
      
      <Input
             value={'Sign In'}
             className = 'mt-5 submit'
             type="submit" 
             onClick ={handleSubmit}
             />
          </Form>

          <Input
             value='Forgot Password'
             className = 'mt-5 submit'
             type="submit" 
             onClick ={gotoPassword}
             />
         
          </Col> }

        </Row>
        
      </Container>
     
       
      
    </div>
  );
};

export default withRouter(MainRegister);
