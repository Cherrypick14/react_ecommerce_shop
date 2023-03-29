import React from 'react'


const Divider = ({color}) => {
  return (
    <>
       <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
    </>
 
  )
}

export default Divider