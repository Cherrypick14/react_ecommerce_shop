import React from 'react'
import "../../styles/categories.scss"
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
           <button>
            <Link className ="link" to ="/products/1"> Sale</Link>
           </button>

        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/1564149/pexels-photo-1564149.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
           <button>
            <Link className ="link" to ="/products/1"> Women</Link>
           </button>

        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/1643773/pexels-photo-1643773.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
           <button>
            <Link className ="link" to ="/products/1"> New Season</Link>
           </button>

        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/906531/pexels-photo-906531.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
           <button>
            <Link className ="link" to ="/products/1"> Men</Link>
           </button>

            </div>
          </div>
          <div className="col">
             <div className="row">
             <img src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
           <button>
            <Link className ="link" to ="/products/1"> Shoes</Link>
           </button>

             </div>
          </div>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/604598/pexels-photo-604598.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
           <button>
            <Link className ="link" to ="/products/1"> Accessories</Link>
           </button>

        </div>
      </div>
    </div>
  )
}

export default Categories