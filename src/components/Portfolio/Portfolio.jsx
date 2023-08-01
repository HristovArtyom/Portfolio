import './portfolio.scss';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Scrollbar, A11y, Pagination } from 'swiper/modules';
import SiteImg1 from '../../images/site1.jpg';
import SiteImg2 from '../../images/site2.jpg';
import SiteImg3 from '../../images/site3.jpg';
import Button from '../Button/Button';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

const Portfolio = () => {
  const swiperArr = [
    {
      src:'https://hristovartyom.github.io/Final-Course-Project/',
      img:SiteImg1,
      title: "Marvel",
      description: "Developed responsive and interactive Web site using React and Marvel API"
    },
    {
      src:'https://hristovartyom.github.io/Diplom-HTML-CSS-JS/',
      img:SiteImg2,
      title: "Monticello",
      description: "Developed responsive and interactive Web site using HTML, CSS, JavaScript"
    },
    {
      src:'https://hristovartyom.github.io/Diplom-HTML-CSS/',
      img:SiteImg3,
      title: "Bhromaon",
      description: "Developed responsive and interactive Web site using HTML, CSS"
    }
  ]

  const theme = useContext(ThemeContext);

  return(
    <div className="portfolio">
      <h3 className="portfolio__h3">Portfolio</h3>
      <p className="portfolio__subtitle">My latest study Projects</p>
      <div className="portfolio__swiper">
      <Swiper
        modules={[Autoplay, Scrollbar, A11y, Pagination]}
        spaceBetween={30}
        loop={true}        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        className="mySwiper"
      >        
        {swiperArr.map((item, index) => 
          <SwiperSlide key={index}>
            <div className="slide">
              <div className="slide__img">
                <img src={item.img} alt="" className={`slide__img--src img__${theme.theme}`} />
              </div>              
              <div className="slide__info">
                <p className="slide__title">{item.title}</p>
                <p className="slide__description">{item.description}</p>
                <Button to={item.src} text='demo' target='_blank'/>
              </div>
            </div>
          </SwiperSlide>        
        )}          
      </Swiper>
      </div>
    </div>
  )
}

export default Portfolio;