import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/home';
import Products from './pages/Products/products';
import Product from './pages/Product/product';

const router = createBrowserRouter([
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
])
function App() {

  return (
    <div className="App">
     <RouterProvider router ={router}/>
    </div>
  );
}

export default App;
