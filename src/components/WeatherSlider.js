import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import SliderItem from "./SliderItem";
import { TiWeatherSunny } from 'react-icons/ti';

export default function WeatherSlider() {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      centerPadding: "60px",
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 3,
          }
        },
      ]
    };

    return (
      <div className="slider">
      <h2 className="today">Today</h2>
        <Slider {...settings}>
          <SliderItem icon={<TiWeatherSunny/>} degree={'6'} hour={'11 AM'}/>
          <SliderItem icon={<TiWeatherSunny/>} degree={'6'} hour={'11 AM'}/>
          <SliderItem icon={<TiWeatherSunny/>} degree={'6'} hour={'11 AM'}/>
          <SliderItem icon={<TiWeatherSunny/>} degree={'6'} hour={'11 AM'}/>
          <SliderItem icon={<TiWeatherSunny/>} degree={'6'} hour={'11 AM'}/>
          <SliderItem icon={<TiWeatherSunny/>} degree={'6'} hour={'11 AM'}/>
          <SliderItem icon={<TiWeatherSunny/>} degree={'6'} hour={'11 AM'}/>
          <SliderItem icon={<TiWeatherSunny/>} degree={'6'} hour={'11 AM'}/>
          <SliderItem icon={<TiWeatherSunny/>} degree={'6'} hour={'11 AM'}/>  
        </Slider>
      </div>
    );
  }
