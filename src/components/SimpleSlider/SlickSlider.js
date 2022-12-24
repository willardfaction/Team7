import React from 'react';
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "../../data"
import "../../styles/SlickSlider.css"
import star from '../../img/star.png'

const SlickSlider = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='App'>
      <div>
      <h2 className='title-TopKnigi'>Топ книги</h2>
       <Slider {...settings} className='slider'>
        {dataDigitalBestSeller.map((item) => (
        <div className='card'>
         <div className='card-top'>
          <img src={item.linkImg} alt={item.title}/>
          <h1 style={{marginTop: '7%'}}>"Успех или успеть"</h1>
          <p style={{display: 'flex', justifyContent: 'center', fontSize: '13px', bottom: '12px', position: 'relative'}}>Алексей Гончаров</p>
         </div>
        <div className='card-bottom'>
          <p className='number'>4</p>
          <img src={star} alt={star} className="star"/>
          <button className='btn-read' onClick={() => navigate("/detail")}>Посмотреть</button>
        </div>
      </div>
      ))}
       </Slider>
       </div>
     
       <h2 className='title-TopKnigi2'>Новинки</h2>
    <div className='new'>
       <Slider {...settings} className='slider'>
        {dataDigitalBestSeller.map((item) => (
        <div className='card'>
         <div className='card-top'>
          <img src={item.linkImg} alt={item.title}/>
          <h1 style={{marginTop: '7%'}}>"Успех или успеть"</h1>
          <p style={{display: 'flex', justifyContent: 'center', fontSize: '13px', bottom: '12px', position: 'relative'}}>Алексей Гончаров</p>
         </div>
        <div className='card-bottom'>
          <p className='number'>4</p>
          <img src={star} alt={star} className="star"/>
          <button className='btn-read'>Посмотреть</button>
        </div>
      </div>
      ))}
       </Slider>
    </div>

    </div>
  )
}

export default SlickSlider