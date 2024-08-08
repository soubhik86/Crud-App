import { useMutation, useQuery } from "@tanstack/react-query";
import { GlobalHooks } from "../GlobalHooks";
import { Detail, FetchList,  Remove,  Update,  create } from "../../Api/ApiHandler";
import { PRODUCTS } from "./QueryKey";

export const CreateProductMutation = () => {
  const { queryClient, navigate } = GlobalHooks();

  return useMutation({
    mutationFn: create,
    onSuccess: (response) => {
      const { status, message } = response || {};
      if (status === 200) {
        navigate("/productlist");
        queryClient.invalidateQueries({ queryKey: [PRODUCTS] });
      }
    },
  });
};

export const FetchProductMutation = () => {
  return useQuery({
    queryKey: [PRODUCTS],
    queryFn: FetchList,
  });
};


export const DeleteMutation = ()=>{
  const { queryClient , navigate} = GlobalHooks();

  return useMutation({
    mutationFn: ({id}) => Remove(id),
    onSuccess: (response) => {
      const { status, message } = response || {};
      if (status === 200) {
        navigate("/productlist");
        queryClient.invalidateQueries({ queryKey: [PRODUCTS] });
      }
    }
  })
}


export const UpdateProductMutation = () => {
  const { queryClient, navigate } = GlobalHooks();

  return useMutation({
    mutationFn: Update,
    onSuccess: (response) => {
      const { status, message } = response || {};
      if (status === 200) {
        navigate("/productlist");
        queryClient.invalidateQueries({ queryKey: [PRODUCTS] });
      }
    },
  });
};



export const DetailProductQuery = (id) => {
  return useQuery({
    queryKey: [PRODUCTS, id],
    queryFn: () => Detail(id),
  });
};






