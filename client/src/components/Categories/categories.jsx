import React from 'react'
import "../../styles/categories.scss"

const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">1</div>
        <div className="row">2</div>
      </div>
      <div className="col">
        <div className="row"></div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row"></div>
          </div>
          <div className="col">
             <div className="row"></div>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </div>
  )
}

export default Categories