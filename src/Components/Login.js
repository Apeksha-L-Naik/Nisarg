import React from 'react';
import nisargLogo from './nisarglogo.png'; // Your new app logo
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'; // Import the CSS file
import leafImage from '../assets/leaf2.jpg'; // Background image path
import { Link } from 'react-router-dom'; // Import Link

function Login() {
  const customButtonStyle = {
    backgroundColor: '#32730e', // Set the desired color using hex code
    border: 'none', // Remove default border for a cleaner look
    color: 'white', // Ensure text contrast for accessibility
  };

  return (
    <div className="login-container">
      {/* Left side with form */}
      <div className="login-left">
        <div className="brand">
          <img src={nisargLogo} alt="App Logo" width="300" /> {/* Adjust logo size as needed */}
          <h1>Login</h1>
          <p>Welcome to our App</p>
        </div>

        <Form className="login-form">
          <Form.Group controlId="formEmail">
            <Form.Label className="text-content">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label className="text-content">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          
          <Button variant="custom" style={customButtonStyle} type="submit" className="login-btn">
            Login
          </Button>
        </Form>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>

      {/* Right side with background image */}
      <div className="login-right" style={{ backgroundImage: `url(${leafImage})` }}>
      </div>
    </div>
  );
}

export default Login;
