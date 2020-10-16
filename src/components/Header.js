import React from 'react';
import logo from '../assets/logo_small_s.png'

const Header = () => {
  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
    fontWeight: '300',
    padding: '0 5% 0 5%',
    // width: '100%',
    height: '10vh',
    marginTop: '1rem',
    marginBottom: '2rem',
    lineHeight: 2,
  };

  return (
    <div className="header-container" style={headerStyles}>
      <img src={logo} alt="Logo"/>
    </div>
  );
};

export default Header;
