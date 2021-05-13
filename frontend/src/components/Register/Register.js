import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { register } from '../../actions/userActions';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
    return () => {
      //cleanup
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <form onSubmit={submitHandler} className='reg-form-show reg-form '>
      <input
        type='text'
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='email'
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type='password'
        placeholder='Re-password'
        onChange={(e) => setRePassword(e.target.value)}
      />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <button type='submit' className='btn'>
        Register
      </button>
      <button className='login-btn-link'>Have an account? Login</button>
    </form>
  );
};

export default Register;
