import React from 'react';
import nisargLogo from './nisarglogo.png'; // Your new app logo
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Signup.css'; // Import the CSS file
import signupbgImage from '../assets/signup1.jpg'; // Background image path
import { Link } from 'react-router-dom'; // Import Link

function Signup() {
  const customButtonStyle = {
    backgroundColor: '#32730e', // Set the desired color using hex code
    border: 'none', // Remove default border for a cleaner look
    color: 'white', // Ensure text contrast for accessibility
  };

  return (
    <div className="Signup-container">
      
      <div className="Signup-img" style={{ backgroundImage: `url(${signupbgImage})` }}>
      </div>
{/* Left side with form */}
<div className="Signup-formtobe">
        <div className="brand">
          <img src={nisargLogo} alt="App Logo" width="200" /> {/* Adjust logo size as needed */}
          <h1>Signup</h1>
          <p>Welcome to our App</p>
        </div>

        <Form className="Signup-form">
          <Form.Group controlId="formName">
            <Form.Label className="text-content">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label className="text-content">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label className="text-content">Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Label className="text-content">Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm your password" />
          </Form.Group>

          <Button variant="custom" style={customButtonStyle} type="submit" className="Signup-btn">
            Signup
          </Button>
        </Form>

        <p className="signup-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
