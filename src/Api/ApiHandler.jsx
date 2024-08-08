import { AxiosInstance } from "./AxiosInstance"
import { endpoint } from "./Endpoint"

export const signup = async (input)=>{
  try {

    const {data} = await AxiosInstance.post(`${endpoint.users.signup}` , input);
    return data;
    
  } catch (error) {
    throw error
  }
}


export const signin = async (input)=>{
  try {

    const {data} = await AxiosInstance.post(`${endpoint.users.signin}` , input);
    return data;
    
  } catch (error) {
    throw error
  }
}


export const create = async (input)=>{
  try {
    const {data} = await AxiosInstance.post(`${endpoint.products.create}`, input);
    return data;
  } catch (error) {
    throw error;
  }
}


export const FetchList = async (input)=>{
  try {
    const {data} = await AxiosInstance.post(`${endpoint.products.list}`, input);
    return data;
  } catch (error) {
    throw error;
  }
}

export const Remove = async (id)=>{
  try {
    const {data} = await AxiosInstance.post(`${endpoint.products.delete}`, {id});
    return data;
  } catch (error) {
    throw error;
  }

}



export const Update = async (input)=>{
  try {
    const {data} = await AxiosInstance.post(`${endpoint.products.update}`, input);
    return data;
  } catch (error) {
    throw error;
  }
}


export const Detail = async (id)=>{
  try {
    const {data} = await AxiosInstance.get(`${endpoint.products.detail}/${id}`);
    return data?.data;
  } catch (error) {
    throw error;
  }

}