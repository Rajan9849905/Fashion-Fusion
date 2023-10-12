import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/cart";
import About from "./pages/About";
import Products from "./pages/Products";
import ErrorPage from "./pages/ErrorPage";
import Navbar from './layouts/Navbar.jsx';
import Footer from './layouts/Footer.jsx';
import Stack from 'react-bootstrap/Stack';




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

  return (
    <div body class="d-flex flex-column h-100">
      <Stack gap={3}>
    <Navbar />
    <main className="flex-shrink-0">
      <div className="container">
      <RouterProvider router={router} />
    </div>
</main>
        <Footer />
        </Stack>
  </div>
)} 

export default App
