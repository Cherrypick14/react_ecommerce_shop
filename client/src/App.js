import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home/home';
import Products from './pages/Products/products';
import Product from './pages/Product/product';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import './styles/app.scss';

const Layout = ()=>{

  return(
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products/:id",
        element: <Products/>
      },
      {
        path: "/product/:id",
        element: <Product/>
      },
    ]
  },
  
])
function App() {

  return (
    <div className="App">
     <RouterProvider router ={router}/>
    </div>
  );
}

export default App;
