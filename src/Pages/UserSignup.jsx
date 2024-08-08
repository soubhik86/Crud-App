import React, { useState } from 'react';
import "./signup.css";
import { useForm } from 'react-hook-form';
import { userSignupMutation } from '../hooks/react-Query/UserQuery';

export const UserSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [img, setImg] = useState();
  const { mutate } = userSignupMutation();

  const handleImage = (e) => {
    setImg(e.target.files[0]);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    if (img) {
      formData.append("profile_pic", img);
    }

    console.log([...formData]);
    mutate(formData);
  };

  return (
    <div className="signup-container">
      <h1>
        <span>Sign Up</span> 
      </h1>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="first_name"
            {...register("first_name", { required: 'First name is required' })}
          />
          {errors.first_name && <span>{errors.first_name.message}</span>}
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="last_name"
            {...register("last_name", { required: 'Last name is required' })}
          />
          {errors.last_name && <span>{errors.last_name.message}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            {...register("email", { required: 'Email is required' })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            {...register("password", { required: 'Password is required' })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="form-group">
          <label>Profile Picture:</label>
          <input type="file" name="image" onChange={handleImage} />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
        <p className="sign-in-link">
          Already have an account? <a href="#">Sign In</a>
        </p>
      </form>
    </div>
  );
};
