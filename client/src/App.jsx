import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/cart";
import About from "./pages/About";
import Products from "./pages/Products";
import ErrorPage from "./pages/ErrorPage";



const privateRoute=()=>{}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/About",
    element: <About />,
  }, 
  {
    path: "/Products",
    element: <Products />,
  },
  {
    path: "/admin/products",
    element: <privateRoute><ErrorPage /></ privateRoute>
  },
  {
    path: "*",
    element: <ErrorPage />,
  }

]);


function App() {

  return <>
   <RouterProvider router={router} />
  </>
} 

export default App
