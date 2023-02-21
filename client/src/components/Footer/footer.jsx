import React from 'react'
import '../../styles/footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
       <div className="top">
          <div className="item">
             <h1>Categories</h1>
             <span>Women</span>
             <span>Men</span>
             <span>Shoes</span>
             <span>Accessories</span>
             <span>New Arrival</span>
          </div>
          <div className="item">
          <h1>Links</h1>
             <span>FAQ</span>
             <span>Pages</span>
             <span>Stores</span>
             <span>Compare</span>
             <span>Cookies</span>
          </div>
          <div className="item">
             <h1>About</h1>
             <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vero asperiores doloribus animi iure sed qui necessitatibus, odit, beatae nesciunt voluptatum voluptates repellat omnis! Veritatis sed deserunt labore id rem.</span>

          </div>
          <div className="item">
          <h1>Contact</h1>
             <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vero asperiores doloribus animi iure sed qui necessitatibus, odit, beatae nesciunt voluptatum voluptates repellat omnis! Veritatis sed deserunt labore id rem.</span>

          </div>
       </div>
       <div className="bottom">
          <div className="left">
             <span className="logo">Kiddostore</span>
             <span className="copyright">
                &copy; Copyright 2023. All rights reserved
             </span>
          </div>
          <div className="right">
            <img src="/img/payment.png" alt="" />
          </div>
       </div>
    </div>
  )
}

export default Footer