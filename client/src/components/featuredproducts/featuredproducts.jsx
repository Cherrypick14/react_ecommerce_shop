import React, { useEffect, useState } from 'react';
import "../../styles/featuredproducts.scss";
import Card from '../Card/card';
import axios from "axios";


const Featuredproducts = ({type}) => {

  const data  = [
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
   {
    id:3,
    img:"https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg?auto=compress&cs=tinysrgb&w=800",
    title:'Glasses',
    isNew:true,
    oldPrice:19,
    price:12,
   },
   {
    id:4,
    img:"https://images.pexels.com/photos/3317434/pexels-photo-3317434.jpeg?auto=compress&cs=tinysrgb&w=800",
    title:'hat',
    isNew:true,
    oldPrice:19,
    price:12,
   },
  ] ;

  const [products, setProducts] = useState([]) ;


  useEffect(() => {
    
    const fetchData = async () => {
     
      try {

        const data = await axios.get(process.env.REACT_APP_API_URL+"/products",
          
        {
          headers:{
            Authorization:"bearer" + process.env.REACT_APP_API_TOKEN,
          },
      
        });

         console.log(data);

      } catch (err) {
        console.log(err);
      }
    };
     fetchData();
  }, []);
  
  return (
    <div className='featuredproducts'>
         <div className="top">
           <h1>{type}&nbsp;products</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quia, dicta eum ipsa non ullam consequatur harum quasi quis iusto asperiores consectetur dolorum incidunt recusandae molestias tempora esse? Repellat, temporibus.</p>

         </div>
         <div className="bottom">
              {data.map((item) => <Card item={item} key={item.id}/>
                )}
         </div>
    </div>
  )
}

export default Featuredproducts