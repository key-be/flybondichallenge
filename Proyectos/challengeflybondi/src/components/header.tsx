import * as React from 'react';
import '../styles/Header.scss';
import logo from '../assets/img/logo.png';

class Header extends React.Component{
  render(){
    return <div className="header-container">
      <div className='brand-container'><img src={logo} alt=''/></div>
      <div></div>
    </div>
  }
}

export default Header;