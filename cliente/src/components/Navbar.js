import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              EduTiva
              <i class='fas fa-meteor' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Pagina Principal
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/AboutUs'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Education'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Educación
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Blog'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
              </li>
  
              <li>
                <Link
                  to='/SignUp'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </div>
        </nav>
      </>
    );
}