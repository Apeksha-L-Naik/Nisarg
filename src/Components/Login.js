import React from 'react';
import logo from './final_logo.jpg'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
function Login() {
  return (
    
    <div className="main-container">
    <div><nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src={logo}  alt="nisarg logo" width="100" height="50"/>
      </a>
  </nav></div>
  <div id="login-container">
  <div className="login-form-container">
    <div class="login_form_content">
    <h2>Login</h2>
    <Form>
    <Form.Group className="mb-3 small-placeholder" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 small-placeholder" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 small-placeholder" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
</div>
  </div>
</div>
  )
}

export default Login