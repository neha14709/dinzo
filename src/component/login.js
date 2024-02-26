import React, { useState, useEffect } from 'react';
import './login.css'; // Make sure to import your CSS file

const LoginForm = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform your API request here, for example:
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailOrPhone, password }),
      });
      if (response.ok) {
        // Handle successful login
        console.log('Login successful');
      } else {
        const data = await response.json();
        setErrorMessage(data.message); // Set error message received from API
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title"><span>Login Form</span></div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="pass"><a href="#">Forgot password?</a></div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="row button">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">Not a member? <a href="#">Signup now</a></div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
