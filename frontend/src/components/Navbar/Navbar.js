import React from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { IoIosBasket } from 'react-icons/io';
import logo from '../../images/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { links } from './NavbarLinks';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} className='nav-logo' alt='' />
        </Link>

        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <button key={id} className='link-btn'>
                <Link to={url}>{text}</Link>
              </button>
            );
          })}
        </ul>

        <div className='right__item'>
          <Link to={'/account'}>
            <button className='btn signin-btn'>Log in</button>
          </Link>

          <div className='nav-container'>
            <IoIosBasket
              className='cart'
              style={{
                fontSize: '25px',
              }}
            />

            <div className='amount-container'>
              <p>9</p>
            </div>
          </div>
          <FaAlignRight
            className='toggle-btn'
            style={{
              fontSize: '25px',
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
