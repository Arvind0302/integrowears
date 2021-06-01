import React from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { IoIosBasket } from 'react-icons/io';
import logo from '../../images/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { links } from './NavbarLinks';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/userActions';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

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
          {userInfo ? (
            <>
              <button className='link-btn'>
                <Link to='/orderhistory'>Orders</Link>
              </button>
              <button className='link-btn'>
                <Link to='/profile'>profile</Link>
              </button>
            </>
          ) : null}
          {userInfo &&
            userInfo.isAdmin(
              <div className='dropdown'>
                <Link to='/profile'>profile</Link>
                <ul className='dropdown-content'>
                  <li>
                    <Link to='/profile'>Dashbord</Link>
                  </li>
                  <li>
                    <Link to='/profile'>products</Link>
                  </li>
                  <li>
                    <Link to='/profile'>Orders</Link>
                  </li>
                  <li>
                    <Link to='/profile'>Users</Link>
                  </li>
                </ul>
              </div>
            )}
        </ul>

        <div className='right__item'>
          {userInfo ? (
            <button className='btn signin-btn' onClick={signoutHandler}>
              Log out
            </button>
          ) : (
            <Link to={'/signin'}>
              <button className='btn signin-btn'>Log in</button>
            </Link>
          )}

          <div className='nav-container'>
            <IoIosBasket
              className='cart'
              style={{
                fontSize: '25px',
              }}
            />

            <div className='amount-container'>
              <p>{cartItems.length}</p>
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
