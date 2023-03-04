import React from 'react'
import "../../styles/products.scss"

const Products = () => {
  return (
    <div className='products'>
        <div className="left">
           <div className="filterItem">
             <h2>Product Categories</h2>
               <div className="inputItem">
                  <input type="checkbox" id ="1" value={1} />
                   <label htmlFor="1">Shoes</label>
               </div>
               <div className="inputItem">
                  <input type="checkbox" id ="2" value={2} />
                   <label htmlFor="2">Bags</label>
               </div>
               <div className="inputItem">
                  <input type="checkbox" id ="3" value={3} />
                   <label htmlFor="3">Cardigans</label>
               </div>
           </div>
           <div className="filterItem">
            <h2>Filter by price</h2>
              <div className="inputItem">
                  <span>0</span>
                   <input type="range" min={0} max={1000} />
                   <span>1000</span>

              </div>
           </div>
           <div className="filterItem">
              <h1>Sort by</h1>
                <div className="inputItem">
                   <input type="radio" id="asc" value="asc" name="price"/>
                   <label htmlFor="asc">Price(Lowest first)</label>

                </div>
                <div className="inputItem">
                   <input type="radio" id="desc" value="desc" name="price"/>
                   <label htmlFor="desc">Price(Highest first)</label>

                </div>
           </div>
        </div>
        <div className="right"></div>
    </div>
  )
}

export default Products;