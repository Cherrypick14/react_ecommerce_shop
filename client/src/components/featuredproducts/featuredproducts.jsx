import React from 'react'
import "../../styles/featuredproducts.scss"
import Card from '../Card/card'

const Featuredproducts = ({type}) => {

  const data  = [
   {
    id:1,
    img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Ftheholidaydealers.com%2Fwp-content%2Fwebpc-passthru.php%3Fsrc%3Dhttps%3A%2F%2Ftheholidaydealers.com%2Fwp-content%2Fuploads%2F2019%2F01%2FMfangano-Island-Camp-10.jpg%26nocache%3D1&imgrefurl=https%3A%2F%2Ftheholidaydealers.com%2Fdestinations%2Fkenya%2Fkisumu%2Fmfangano-island-camp%2F&tbnid=kIorST8ly8lOLM&vet=12ahUKEwi3g8ztg7T9AhXvmicCHS78BHQQMygIegUIARD0AQ..i&docid=mWCctm5zpLDOFM&w=900&h=500&q=mfangano%20island&ved=2ahUKEwi3g8ztg7T9AhXvmicCHS78BHQQMygIegUIARD0AQ",
    title:'Long Sleeve Graphic Tee',
    isNew:true,
    oldPrice:19,
    price:12,
   },
   {
    id:2,
    img:"https://novanglobal.com/tour/mfangano-island-camp/",
    title:'Glovo',
    isNew:true,
    oldPrice:19,
    price:12,
   },
   {
    id:3,
    img:"https://unsplash.com/photos/78A265wPiO4",
    title:'Go Pato',
    isNew:true,
    oldPrice:19,
    price:12,
   },
   {
    id:4,
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fke%2Fmfangano-island-lodge.html&psig=AOvVaw0Q0GCPiNYp9hByR9gWX4ut&ust=1677533368309000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDD_vaQtP0CFQAAAAAdAAAAABAE",
    title:'We good',
    isNew:true,
    oldPrice:19,
    price:12,
   },
  ]

  return (
    <div className='featuredproducts'>
         <div className="top">
           <h1>{type}products</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quia, dicta eum ipsa non ullam consequatur harum quasi quis iusto asperiores consectetur dolorum incidunt recusandae molestias tempora esse? Repellat, temporibus.</p>

         </div>
         <div className="bottom">
              {data.map(
                item => <Card item={item} key={item.id}/>
                )}
         </div>
    </div>
  )
}

export default Featuredproducts