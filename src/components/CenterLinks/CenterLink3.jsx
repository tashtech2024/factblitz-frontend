import React from 'react';

const CenteredLinkThree = () => {
  const linkStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vh', // This makes the container take the full viewport height
  };

  return (
    <div style={linkStyle}>
      <a href="https://www.factretriever.com/">The Fact Site</a>
    </div>
  );
};

export default CenteredLinkThree;