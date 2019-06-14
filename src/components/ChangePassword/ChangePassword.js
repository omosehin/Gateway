import React,{useState,useEffect} from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Container,Row, Col, Button } from "reactstrap";
// import "./ForgotPassword.css";

const ChangePassword = ()=>{
    const [values, setvalue] = useState({})
    const [errors, seterrors] = useState({})
    const [isSubmitting, setisSubmitting] = useState(false)

    const handleChange = (e)=>{
        setvalue({...values,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{    
        setisSubmitting(true)
        e.preventDefault()
        const Submitted = {password:values.password}
        console.log(Submitted)

    }
    
    return(
        <div>
        <Container>
            <Row>
                            <Col lg="6" sm="12" className='password_container'>    
                            <p className = 'text-white text-center mt-3'>Change your Password</p>           
                <Form>
                <FormGroup>
                <Label className = 'mt-3 password_label text-center mt-3 mb-3' for="password">Password</Label>   
                <Input type="password" name ='password' value ={values.password} onChange= {handleChange} className='email_placeholder' placeholder='Password'/>
               
                <Label className = 'mt-3 password_label text-center mt-3 mb-3' for="password2">Comfirm Password</Label>   
                <Input type="password" name='password2' value ={values.password2} onChange= {handleChange} className='email_placeholder' placeholder=' Comfirm Password'/>
               
               
               <div className ='passwordSubmit_button'>
               <Button type="submit" onClick={handleSubmit}>Change Password</Button>
               </div>

                </FormGroup>

               </Form>
                </Col>
            </Row>
           
         </Container>
         </div>
    );
}

export default ChangePassword


// waist 31 && 1/2
// length :41
// knee:18
// ankle:14
// thigh 25 and half
// hip 42
