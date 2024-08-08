import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./component/Home";
import { Root } from "./layouts/Root";
import { UserSignin } from "./Pages/UserSignin";
import { UserSignup } from "./Pages/UserSignup";
import { CreateProduct } from "./Product Page/CreateProduct";
import { ProductList } from "./Product Page/ProductList";
import { UpdateProduct } from "./Product Page/UpdateProduct";
// import { AuthRouter } from "./utils/AuthRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <UserSignin />,
      },
      {
        path: "/signup",
        element: <UserSignup />,
      },
      {
              path: "/createproduct",
              element: <CreateProduct />,
       },
      {
              path: "/productlist",
              element: <ProductList/>,
       },
      {
              path: "/update/:id",
              element: <UpdateProduct/>,
       },


    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
