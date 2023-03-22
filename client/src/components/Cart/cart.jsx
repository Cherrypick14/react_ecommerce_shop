import React from 'react'
import "../../styles/cart.scss"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {useSelector} from "react-redux"

const Cart = () => {
  const products = useSelector(state =>state.cart.products)

  return (
    <div className='cart'>
       <h1>Total items in your cart</h1>
       {products.map((item) => (
         <div className="items" key={item.id}>
            <img src={item.img} alt="" />
               <div className="details">
                  <h1>{item.title}</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel, veritatis voluptatum laborum, assumenda cum excepturi non ullam sunt possimus provident rerum. Animi neque, ullam sapiente distinctio quis asperiores ipsam.</p>
                <div className="price">1 * {item.price}</div>
          </div>

             <DeleteOutlinedIcon className='delete' />

         </div>
         )
       )}
       
     <div className="total">
       <span>SUBTOTAL</span>
       <span>$200</span>
     </div>

     <button>CHECKOUT </button>

     <span className='reset'>Reset Cart</span>


    </div>
  )
}

export default Cart