import React, { useEffect, useState } from 'react';
import './Signin.css';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../actions/userActions';
import Register from '../../components/Register/Register';

const Signin = () => {
  const [loginForm, setLoginForm] = useState(true);
  const [registerForm, setRegisterForm] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  const loginBtn = () => {
    setRegisterForm(false);
    setLoginForm(true);
  };
  const registerBtn = () => {
    setRegisterForm(true);
    setLoginForm(false);
  };

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
    return () => {
      //cleanup
    };
  }, [userInfo]);

  return (
    <section className='signin-page'>
      <div className='account-page'>
        <div className='form-container'>
          <div className='form-btn'>
            <button className='account-btns' onClick={loginBtn}>
              Login
            </button>

            <button className='account-btns' onClick={registerBtn}>
              Register
            </button>
            <hr
              className={`${
                registerForm ? 'indicator show-indicator ' : 'indicator'
              }`}
            />
          </div>
          <form
            onSubmit={submitHandler}
            className={`${
              loginForm ? 'login-form' : 'login-form login-form-show'
            }`}
          >
            <input
              type='email'
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <button type='submit' className='btn '>
              Login
            </button>
            <div>
              <Link to='' className='forgot-password'>
                Forgot password?
              </Link>
            </div>
            <button className='create-account' onClick={registerBtn}>
              Dont have an account? Create One
            </button>
          </form>
          {loginForm ? null : <Register />}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Signin;
