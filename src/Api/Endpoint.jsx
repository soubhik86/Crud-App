export const  baseUrl = "https://wtsacademy.dedicateddevelopers.us/api"


export const profilePic = (media)=>{
  return ( `https://wtsacademy.dedicateddevelopers.us` +
  `/uploads/user/profile_pic/${media}`)
}


export const image = (media)=>{
  return ( `https://wtsacademy.dedicateddevelopers.us` +
  `/uploads/product/${media}`)
}


export const endpoint = {
  users:{
    signup:"/user/signup",
    signin:"/user/signin",
  },

  products:{
    create: "/product/create",
    list: "/product/list",
    delete: "/product/remove",
    update: "/product/update",
    detail: "/product/detail",

  }
}