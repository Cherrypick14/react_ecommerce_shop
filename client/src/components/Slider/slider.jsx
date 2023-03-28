import React,{useState, useRef, useEffect} from 'react'
import { Carousel,Container } from 'react-bootstrap';
import { init } from 'ityped'

import "../../styles/slider.scss"

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const textRef = useRef();
    useEffect(()=>{

    init(textRef.current,{

         backDelay:1500,
         showCursor:true,
         strings:[
             'Welcome',
             'to ',
             'KiddoStore'
         ]
    })

    }, [])
  const data = [
    "https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1857000/pexels-photo-1857000.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
  
    <div className='slider'>
     <Container fluid >
    
           <Carousel activeIndex={index} onSelect={handleSelect} fade>
         
          <Carousel.Item>
         <div className="d-block w-100" style={{ position: 'relative',height: '600px'}}>
          
         <Carousel.Caption className='carCaption'>
           <h1 ref ={textRef}></h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius voluptatibus sint est possimus? Atque totam voluptatem veritatis. Qui laborum veritatis ipsameos tenetur facilis quo minima reprehenderit aperiam reiciendis?</p>
        </Carousel.Caption>
        <img 
          className="d-block w-100"
          src={data[0]}
          alt="First slide"
        />
        
        <div style={{
           position: 'absolute',
           top: 0,
           
           left: 0,
           width: '100%',
           height: '100%',
           opacity:.7,
           backgroundImage: 'linear-gradient(to bottom, #09203F,#537895)'

        }}>
          

        </div>

        </div>
       
      </Carousel.Item>

      <Carousel.Item>
        <div className="d-block w-100" style={{ position: 'relative',height: '600px'}}>
        <Carousel.Caption className='carCaption'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius voluptatibus sint est possimus? Atque totam voluptatem veritatis. Qui laborum veritatis ipsameos tenetur facilis quo minima reprehenderit aperiam reiciendis?</p>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={data[1]}
          alt="Second slide"
        />
        <div style={{
           position: 'absolute',
           top: 0,
           
           left: 0,
           width: '100%',
           height: '100%',
           opacity:.7,
           backgroundImage: 'linear-gradient(to bottom, #09203F,#537895)'

        }}></div>
        </div>
        
      </Carousel.Item>

      <Carousel.Item>
        <div className="d-block w-100" style={{ position: 'relative',height: '600px'}}>
        <Carousel.Caption className='carCaption'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius voluptatibus sint est possimus? Atque totam voluptatem veritatis. Qui laborum veritatis ipsameos tenetur facilis quo minima reprehenderit aperiam reiciendis?</p>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={data[2]}
          alt="Third slide"
        />
        <div style={{
           position: 'absolute',
           top: 0,
           
           left: 0,
           width: '100%',
           height: '100%',
           opacity:.7,
           backgroundImage: 'linear-gradient(to bottom, #09203F,#537895)'

        }}></div>
        </div>
       
      </Carousel.Item>
           </Carousel>
           
        </Container>
    </div>
       
       
  
  
    
  )
}

export default Slider;