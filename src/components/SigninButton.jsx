import React from 'react';
import { Link } from 'react-router-dom';

const SigninButton = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vh', // This makes the container take the full viewport height
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#E85C20',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  };

  return (
    <div style={containerStyle}>
      <Link to="/SigninLoginPage" style={buttonStyle}>Join The Fam!</Link>
    </div>
  );
};

export default SigninButton;