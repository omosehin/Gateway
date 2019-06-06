
import React,{useState} from "react";
import {withRouter} from 'react-router-dom'
import { Container, Jumbotron, Row, Col, Button } from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Register from '../../Assets/external-link-symbol.svg'
import "./Register.css";
const MainRegister = props => {
  const [values, setValues] = useState({})
  const [userAction, setuserAction] = useState('Sign Up')
  
  const gotoSignIn =_=>{
    setuserAction('Sign In')
  }
  const gotoSignUp =_=>{
    setuserAction('Sign Up')
  }
  const handleChange = (e) =>{
    setValues([e.target.name]:(e.target.value))
  }
  const handleSignUpSubmit = (e) =>{
      e.preventDefault()
      console.log(userAction)
  }
  const handleSignInSubmit = (e) =>{
      e.preventDefault()
      console.log(userAction)
  }
  
  return (
    <div>
      <div className='text-center'>
      <img src = {Register} alt = 'register' width = {50} height={50} className ='mt-3'/>
      <p className = 'text-white'>Where things happen</p>
      </div>
      
      <Form onSubmit = {userAction === 'Sign Up'? handleSignUpSubmit : handleSignInSubmit}>
      { (userAction === 'Sign Up')&&
          <FormGroup>
          <Label className = 'mt-3' for="username">Username</Label>
          <Input 
            type="text" 
            id= "username"
            name="username" 
            value = {values.username}
            placeholder="UserName"
            OnChange={handleChange}
            required
            className = 'input'
             />
             <Label className = 'mt-3' for="email">Email</Label>   
          <Input 
            type="email" 
            name="email" 
            id="email"
            value = {values.email}
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
            value = {values.password}
            placeholder="Password"
            OnChange={handleChange}
            required
            className = 'input'
             />
             <Label className = 'mt-3' for="password2">Comfirm Password</Label>   
          <Input 
            type="password" 
            name="password2"
            id = "password2" 
            value = {values.password2}
            placeholder="Confirm Password"
            OnChange={handleChange}
            required
            className = 'input'
             />
            
             </FormGroup>       
      }

          { (userAction === 'Sign In')&&
          <FormGroup>
             <Label className = 'mt-3' for="email">Email</Label>   
          <Input 
            type="email" 
            name="email" 
            id="email"
            value = {values.email}
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
            value = {values.password}
            placeholder="Password"
            OnChange={handleChange}
            required
            className = 'input'
             />
             </FormGroup>       
      }
      <Input
             value={userAction ==='Sign Up' ? 'Sign Up':'Sign In'}
             className = 'mt-5 submit'
             type="submit" 
             onClick = {userAction === 'Sign Up'? handleSignUpSubmit : handleSignInSubmit}
             />
          </Form>
         {userAction === 'Sign Up' && <div  className = 'text-center text-white d-flex justify-content-around mt-3'>
          <p>Already has an account</p>
          <p className ='login' onClick={gotoSignIn}>Login</p>
          </div>}
         {userAction === 'Sign In' && <div  className = 'text-center text-white d-flex justify-content-around mt-3'>
          <p>Don't have an account already</p>
          <p className ='login' onClick={gotoSignUp}>Sign Up</p>
          </div>}
       
      
    </div>
  );
};

export default withRouter(MainRegister);
