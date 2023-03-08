import React from 'react'
import "../../styles/cart.scss"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
  const data =[
    {
      id:1,
      img:"https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=800",
      img2:"https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=800",
      title:'Long Sleeve',
      isNew:true,
      oldPrice:19,
      price:12,
     },
     {
      id:2,
      img:"https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=800",
      title:'Duke style',
      isNew:true,
      oldPrice:19,
      price:12,
     },
  ]
  return (
    <div className='cart'>
       <h1>Total items in your cart</h1>
       {data.map((item) => (
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