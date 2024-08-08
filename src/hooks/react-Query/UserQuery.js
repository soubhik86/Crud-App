import { signin, signup } from "../../Api/ApiHandler"
import { GlobalHooks } from "../GlobalHooks"
import { useMutation} from '@tanstack/react-query'
import { USERS } from "./QueryKey"


export const userSignupMutation = ()=>{
  const {queryClient , navigate} = GlobalHooks()

  return useMutation({
    mutationFn: signup,
    onSuccess: (response)=>{
navigate("/signin")
queryClient.invalidateQueries({ queryKey: [USERS] })

    }
  })

}

// export const userSigninMutation = ()=> {
//   const {queryClient , navigate} = GlobalHooks()

//   return useMutation({
//     mutationFn: signin,
//     onSuccess: (response)=>{
//       const { status , token , message , data:{first_name , profile_pic }} = response || {}

// if( status===200 ){
//   localStorage.setItem("token", token)
//   localStorage.setItem("name", first_name)
//   localStorage.setItem("proimg", profile_pic)

//   navigate("/createproduct");

// } else {
//   navigate("/signin");
// }

//     }
//   })
// }  


export const userSigninMutation = ()=> {
  const {queryClient , navigate} = GlobalHooks()

  return useMutation({
    mutationFn: signin,
    onSuccess: (response)=>{
      const { status , token , message , data:{first_name , profile_pic }} = response || {}

if( status===200 ){
  localStorage.setItem("token", token)
  localStorage.setItem("name", first_name)
  localStorage.setItem("proimg", profile_pic)

  navigate("/createproduct");

} else {
  navigate("/signin");
}

    }
  })
}  

