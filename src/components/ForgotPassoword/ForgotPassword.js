import React,{useState} from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Container,Row, Col, Button } from "reactstrap";
import "./ForgotPassword.css";

const ForgotPassword = ()=>{
    const [value, setvalue] = useState('')

    const handleChange = (e)=>{
        setvalue(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(value)
    }
    return(
        <div>
        <Container>
            <Row>
                <Col lg="6" sm="12" className='password_container'>
                <Form>
                <FormGroup>
                <Label className = 'mt-3 password_label text-center mt-3 mb-3' for="email">FORGOT PASSWORD</Label>   
                <Input type="email" value ={value} onChange= {handleChange} className='email_placeholder' placeholder='Your email'/>
               <div className ='passwordSubmit_button'>
               <Button type="submit" onClick={handleSubmit}>Submit Email</Button>

               </div>

                </FormGroup>

               </Form>
                </Col>
            </Row>
           
         </Container>
         </div>
    );
}

export default ForgotPassword


// waist 31 && 1/2
// length :41
// knee:18
// ankle:14
// thigh 25 and half
// hip 42
