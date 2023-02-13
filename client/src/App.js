import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Home</p>,
  },
  {
    path: "/products/:id",
    element: <p>Categories</p>
  },
  {
    path: "/product/:id",
    element: <p>Product</p>,
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
