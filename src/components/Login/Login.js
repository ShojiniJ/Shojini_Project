import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setusername } from '../../Redux/Actions/Action'
import { useNavigate } from 'react-router-dom';
import {
    Form,
    Button,
    Container,
    Row,
    Col,
    Card,
    Image,
  } from "react-bootstrap";
  import './login.css'
  import 'bootstrap-icons/font/bootstrap-icons.css'; 
  import { FiFacebook, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi";
function Login () {
    const username = useSelector(state => state.accountname.username)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[usrname,setusname] = useState('')
    const[password,setpassword] = useState('')
    const[error,seterror] = useState('') 
    const handleusernameChange =(e) =>{
        seterror('')
        setusname(e.target.value)
        dispatch(setusername(e.target.value))
    }
    const handlepasswordchange =(e) =>{
        seterror('')
        setpassword(e.target.value)
    }

    const handlelogin =(e) =>{
        e.preventDefault()
     //   dispatch(setusername(username))
       // console.log(username)
       const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

       if(username.trim() ==='' || password.trim() ===''){
        seterror('Please enter all fields')
        return
       }
       if (!passwordPattern.test(password)) {
        seterror('Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.');
        return;
      }
      
      

       else{
        navigate('/home')
       }
    }
    return(
        <Container fluid className="mt-5" >
    
          <Row className="justify-content-center  justify-content-center-mobile">
           
               
                <Col md={3} className="d-flex flex-column justify-content-center justify-content-center-mobile">
                  <h2 className="signin">Sign In</h2>
                  <p className='newuser'>
                    New user? <a className='createaccount' href="#" style={{textDecoration:'none'}}>Create an account</a>
                  </p>
                  <Form onSubmit={handlelogin}>
                    <Form.Group controlId="formBasicEmail" >
                      <Form.Control
                        type="text"
                        placeholder="Username or email"
                        value={usrname}
                        onChange={handleusernameChange}
                        className="border-dark username"
                     
                        style={{ borderWidth: '2px',borderRadius:'0' }}
                      />
                    </Form.Group>
  
                    <Form.Group controlId="formBasicPassword" >
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlepasswordchange}
                        className="border-dark username"
                        style={{ borderWidth: '2px' ,borderRadius:'0',marginBottom:'24px'}}
                      />
                      {error &&
                      <div className='username'>
                      <Form.Text className="text-danger">{error}</Form.Text> </div>}
                    </Form.Group>
  
                    <Form.Group >
                      <Form.Check type="checkbox" label="Keep me signed in"  className='text-start' />
                    </Form.Group>
  
                    <Button  type="submit" className="signbutton">
                      Sign In
                    </Button>
  
                    <div className="signinwith">Or Sign In With</div>

                     <Container style={{width:'280px'}}>
        <Row className='justify-content-center'>
<Col>
            <a href="#!" className="btn btn-outline-dark rounded-circle me-2 icon">
              <FiFacebook />
            </a>
            <a href="#!" className="btn btn-outline-dark rounded-circle me-2 icon">
              <FiTwitter />
            </a>
            <a href="#!" className="btn btn-outline-dark rounded-circle me-2 icon">
              <FiLinkedin />
            </a>
            <a href="#!" className="btn btn-outline-dark rounded-circle icon" >
              <FiYoutube />
            </a>
     </Col>
        </Row>
        </Container>
                  </Form>
                </Col>
  
             
                <Col
              md={{ span: 6 }}
                  className="d-none d-md-flex align-items-center justify-content-end"
                  
                >
                  <Image
                    src={`${process.env.PUBLIC_URL}/images/Capture1.png`}
                    
                    alt="Login Illustration"
                    fluid
                    className="login-image"
                  />
                </Col>
              </Row>
          
         
      </Container>
    )
}
export default Login