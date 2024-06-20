import React from 'react';

const CenteredLink = () => {
  const linkStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vh', // This makes the container take the full viewport height
  };

  return (
    <div style={linkStyle}>
      <a href="https://www.mentalfloss.com/">Mental Floss</a>
    </div>
  );
};

export default CenteredLink; 