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
             <span>Kiddostore is an innovative and unique ecommerce platform that caters to the needs of parents and the community at large.</span>

          </div>
          <div className="item">
          <h1>Contact</h1>
             <span>You can reach us by phone, email, or through our website's live chat feature. We strive to respond to all inquiries as quickly as possible.</span>

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