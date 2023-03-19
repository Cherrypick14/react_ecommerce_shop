import React,{useState} from 'react'
import "../../styles/product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch  from "../../hooks/useFetch";
import { useParams } from 'react-router-dom';

const Product = () => {
    const id = useParams().id
    const[selectedImg, setSelectedImg] = useState("img");  // initialize selectedImg state variable
    const[quantity, setQuantity] = useState(1);
    const url = `/products/${id}?populate=*`;
    const{data, loading, error} = useFetch(url) ;
  return (
    <div className ="product">
       {loading?("loading"):
       (<>
        <div className="left">
            <div className="images">
                <div className="images">
                     <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
                     alt=""
                  onClick={() => setSelectedImg("img")} // update selectedImg when clicked
                      />

                     <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url}
                     alt=""
                     onClick={() => setSelectedImg("img2")} // update selectedImg when clicked
                      />
                 </div>
                <div className="mainImg">
                 <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url}
                alt=""
               />
                </div>
            </div>
        </div>
        <div className="right">
        <h1>{data?.attributes?.title}</h1>
            <span className='price'>{data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
              <div className="quantity">
                <button onClick={()=>setQuantity((prev)=> (prev === 1 ? 1 : prev- 1))}>-</button>

                   {quantity}

                <button onClick={()=>setQuantity((prev)=>prev + 1)}>+</button>

             </div>

             <button className="add">
            
             <AddShoppingCartIcon /> ADD TO CART

             </button>
             <div className="links">
          <div className="item">
             <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
             <BalanceIcon /> COMPARE
          </div>   
      </div>
      <div className="info">
       <span>Vendor: Calvin</span>
       <span>Product Type: Poll Neck</span>
       <span>Tag: Men, women, p-neck </span>

     </div>
     <hr/>
     <div className="details" style={{marginTop:"30px"}}>
        <span>Description</span>

             <hr/>

             <span>Additional Info</span>

               <hr/>

                <span>FAQs</span>
          </div>
        </div>
       </>)
       }

    </div>
  )
}

export default Product