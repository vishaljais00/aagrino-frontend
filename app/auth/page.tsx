'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Signup from '../components/signup';
import Login from '../components/login';
import { logOutAsync, signInWithGoogle  } from '@/redux/feature/users/userSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch} from '@/redux/store';

const Page = () => {
  const [showLogin, setShowLogin] = useState(true);
  const dispatch = useDispatch<AppDispatch>();


  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  async function handleSignInWithGoogle (){ 
    dispatch(signInWithGoogle());

  }
  
    async function handleLogoutWithGoogle (){ 
        dispatch(logOutAsync());
    }

  return (
    <div>
      {showLogin ? (
        <Login />
      ) : (
        <Signup />
      )}
      <div className='text-center my-5'>
        <button onClick={toggleForm}>
          {showLogin ? 'Switch to Signup' : 'Switch to Login'}
        </button>
      </div>
      <div className='text-center my-5'>
        <button type='button' onClick={() => {handleSignInWithGoogle()}}> 
          <span> Sign In with Google </span>
        </button>
      </div>
    <div className='text-center my-5'>
        <button type='button' onClick={() => {handleLogoutWithGoogle()}}> 
          <span> Logout with Google </span>
        </button>
      </div>
    </div>
  );
};

export default Page;
