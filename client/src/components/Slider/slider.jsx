import React,{useState, useRef, useEffect} from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { init } from 'ityped'

import "../../styles/slider.scss"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
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
    "https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
   <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`,Position:"relative"}}>
        <div className="mystyletext" style={{position:"absolute"}}>
        {/* {eslint-disable-next-line} */}
        <h1 ref ={textRef}></h1>
        <p>Kiddostore is a dynamic and inclusive ecommerce platform designed for parents and guardians seeking high-quality, affordable clothing, toys, and accessories for kids. </p>
        </div>
         
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <div className="overlay"></div>
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon style={{color:'white'}}/>
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon style={{color:'white'}}/>
        </div>
      </div>
    </div>
    
  );
};

export default Slider;