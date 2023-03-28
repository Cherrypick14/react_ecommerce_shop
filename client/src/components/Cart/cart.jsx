import React from 'react'
import "../../styles/cart.scss"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {useSelector,useDispatch} from "react-redux";
import {removeItem,resetCart} from '../../redux/cartReducer';
import { makeRequest} from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {

  const products = useSelector((state) => state.cart.products);  

  const dispatch = useDispatch();

  const subTotal = ()=>{
    let total = 0 ;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
  const stripePromise = loadStripe(
    'pk_test_51MotQ2G3gUVndL3D1pZT7bX8Bt03ij0xuYDP7t3mAWvDQg3tBBQMyXzXlDao8GMDV7vReqX4bRHeYxraLpcZmxDU00I92RqHmD'
    );

  const handlePayments = async () =>{
    try{
    const stripe = await stripePromise;
    const res = await makeRequest.post('/orders',{
      products,
    });
     await stripe.redirectToCheckout({
       sessionId: res.data.stripeSession.id,
     });

    } catch(err){
   console.log(err);
    }
  }

  return (
    <div className='cart'>
       <h1>Total items in your cart</h1>
       {products?.map((item) => (
         <div className="items" key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
               <div className="details">
                  <h1>{item.title}</h1>
                     <p>{item.desc?.substring(0,100)}</p>
                <div className="price">
                  {item.quantity} x ${item.price}</div>
          </div>

             <DeleteOutlinedIcon
              className='delete' 
              onClick={()=> dispatch(removeItem(item.id))}/>

         </div>
         )
       )}
       
     <div className="total">
       <span>SUBTOTAL</span>
       <span>${subTotal()}</span>
     </div>

     <button onClick={handlePayments}>CHECKOUT </button>

     <span className='reset'onClick={()=>dispatch(resetCart())}>Reset Cart</span>


    </div>
  );
};

export default Cart;