import React from 'react'
import "../../styles/cart.scss"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {useSelector,useDispatch} from "react-redux";
import useFetch  from "../../hooks/useFetch";
import { useParams } from 'react-router-dom';
import {removeItem,resetCart} from '../../redux/cartReducer'
import {makeRequest} from "../../makeRequest"
import {loadStripe} from "@stripe/stripe-js"

const Cart = () => {
  const id = useParams().id
  const products = useSelector(state =>state.cart.products);

  const url = `/products/${id}?populate=*`;
  const{data, loading, error} = useFetch(url) ;

  const dispatch = useDispatch();

  const subTotal = ()=>{
    let total = 0 ;
    products.forEach(item => {
      total += item.quantity * item.price
    });
    return total.toFixed(2)
  }
  const stripePromise = loadStripe('pk_test_51MotQ2G3gUVndL3D1pZT7bX8Bt03ij0xuYDP7t3mAWvDQg3tBBQMyXzXlDao8GMDV7vReqX4bRHeYxraLpcZmxDU00I92RqHmD');

  const handlePayment = async ()=>{
    try{

    const stripe = await stripePromise

    const res = await makeRequest.post('/orders',{
      products
    });

     await stripe.redirectToCheckout({
       sessionId: res.data.sessionId,
     });

    }catch(err){
   console.log(err)
    }
  }

  return (
    <div className='cart'>
       <h1>Total items in your cart</h1>
       {products.map((item) => (
         <div className="items" key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
               <div className="details">
                  <h1>{item.title}</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel, veritatis voluptatum laborum, assumenda cum excepturi non ullam sunt possimus provident rerum. Animi neque, ullam sapiente distinctio quis asperiores ipsam.</p>
                <div className="price">{item.quantity} * {item.price}</div>
          </div>

             <DeleteOutlinedIcon className='delete' onClick={()=> dispatch(removeItem(item.id))}/>

         </div>
         )
       )}
       
     <div className="total">
       <span>SUBTOTAL</span>
       <span>{subTotal()}</span>
     </div>

     <button onClick={handlePayment}>CHECKOUT </button>

     <span className='reset'onClick={()=>dispatch(resetCart())}>Reset Cart</span>


    </div>
  )
}

export default Cart