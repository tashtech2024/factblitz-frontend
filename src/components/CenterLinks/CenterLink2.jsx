import React from 'react';

const CenteredLinkTwo = () => {
  const linkStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vh', // This makes the container take the full viewport height
  };

  return (
    <div style={linkStyle}>
      <a href="https://www.factretriever.com/">Fact Retriever</a>
    </div>
  );
};

export default CenteredLinkTwo;