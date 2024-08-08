import React, { useState, useEffect} from 'react';

import "./CreateProduct.css"; // Import the CSS file
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DetailProductQuery, UpdateProductMutation } from '../hooks/react-Query/ProductQuery';



export const UpdateProduct = () => {


  const {id} = useParams();

  const { data, isLoading, error } = DetailProductQuery(id);



  const { register, handleSubmit, setValue, formState: { errors } , } = useForm();
  const navigate = useNavigate();
  const [img, setImg] = useState(null);


  const {mutate} = UpdateProductMutation();



  useEffect(() => {
    if (data) {
      setValue("title", data.title);
      setValue("description", data.description);
    }
  }, [data, setValue]);
  


  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    if (img) {
      formData.append("image", img);
    }
    console.log([...formData]);
    formData.append("id", id)
    mutate(formData)

  };

  const handleClick = () => {
    navigate('/productlist');
  };

  const handleImage = (e) => {
    setImg(e.target.files[0]);
  };

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className="form-container">
      <button className="product-list-button" onClick={handleClick}>Product List</button>
      <form onSubmit={handleSubmit(onSubmit)} className="product-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
          
            {...register("title", { required: true })}
          />
          {errors.title && <span className="error">Title is required</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            
            {...register("description", { required: true })}
          />
          {errors.description && <span className="error">Description is required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload Image</label>
          <input type="file" onChange={handleImage} />
          {errors.image && <span className="error">Image is required</span>}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};
