
import React from 'react'
import {useNavigate} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { DeleteMutation, FetchProductMutation } from '../hooks/react-Query/ProductQuery';
import { image } from '../Api/Endpoint';



export const ProductList = () => {



  const { isPending, error, data } = FetchProductMutation();

  const {mutate} = DeleteMutation();
  const navigate = useNavigate();

  const handleDelete = (id)=>{
     mutate({id});
  }

  const HandleEdit = (id)=>{

    navigate(`/update/${id}`)
     
  }


 
  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>Product List</h1>
      <Table striped>
      <thead>
        <tr>
     
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
     <tbody>
      {data?.data.map((product)=>(
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.description}</td>
          <td>
          <img style={{height:"100px", width:"100px"}} src={image(product.image)} alt={product.title} />
          </td>
          <td>
            <button onClick={()=> handleDelete(product._id)}>Delete</button>
            <button onClick={()=> HandleEdit(product._id)}>Edit</button>
          </td>
        </tr>
      ))}
     </tbody>
    </Table>
    </div>
  )
}
