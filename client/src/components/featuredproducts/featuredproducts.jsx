import React from 'react'
import "../../styles/featuredproducts.scss"

const Featuredproducts = ({type}) => {
  return (
    <div className='featuredproducts'>
         <div className="top">
           <h1>{type}products</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quia, dicta eum ipsa non ullam consequatur harum quasi quis iusto asperiores consectetur dolorum incidunt recusandae molestias tempora esse? Repellat, temporibus.</p>

         </div>
         <div className="bottom"></div>
    </div>
  )
}

export default Featuredproducts