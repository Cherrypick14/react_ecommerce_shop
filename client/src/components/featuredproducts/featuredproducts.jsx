import React, { useEffect, useState } from 'react';
import "../../styles/featuredproducts.scss";
import Card from '../Card/card';
import axios from "axios";


const Featuredproducts = ({type}) => {


  const [data, setData] = useState([]) ;


  useEffect(() => {
    
    const fetchData = async () => {
     
      try {

        const res = await axios.get(process.env.REACT_APP_API_URL +`/products?populate=*&filters[type][$eq]=${type}`,
          
        {
          headers:{
        
            Authorization:`Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
      
        });

         setData(res.data.data);

      } catch (err) {
        console.log(err);
      }
    };
     fetchData();
  }, []);
console.log(data)
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