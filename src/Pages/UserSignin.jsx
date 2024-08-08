import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { userSigninMutation } from '../hooks/react-Query/UserQuery';
import './UserSignin.css'; // Import the CSS file

export const UserSignin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { mutate } = userSigninMutation();

  const handleClick = () => {
    navigate('/signup');
  };

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="container">
      <h1 className="heading">Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label htmlFor="email" className="label">Email Address</label>
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
          className="input"
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
        <br />

        <label htmlFor="password" className="label">Password</label>
        <input
          type="password"
          {...register('password', { required: 'Password is required' })}
          className="input"
        />
        {errors.password && <span className="error">{errors.password.message}</span>}
        <br />

        <button type="submit" className="submitButton">Submit</button>
        <br />
        <button type="button" onClick={handleClick} className="registerButton">
          Not Have Account? Register Here
        </button>
      </form>
    </div>
  );
};

export default UserSignin;
