import React from 'react'
import DrStrange from '../images/img-1.png'
import DrStrange2 from '../images/img-2.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Header = () => {

  const headerStyle = 'flex flex-col md:flex-row justify-between items-center gap-10 px-5 md:px-14 pt-10 pb-20'
  const btnStyle = 'bg-gold p-2 md:px-5 text-black w-1/2 md:w-1/4'
  const swiperImageStyle = 'w-full h-1/4'

  return (
    <section className={headerStyle}>   
     <article className='flex flex-col gap-7 md:gap-10 items-stretch md:w-3/5'>
        <p className='text-4xl md:text-6xl text-gold md:w-10/12'>
          Get Movies Recommended For <span className='text-7xl'>You</span>
        </p>  
        <p className='md:w-11/12 text-lg md:text-xl'>
          EliteTV is a movie reviewing and recommendation platform that offers a variety of features. On this platform, users can read reviews of new and classic movies, different genre of movies, and add their favourite movies to their favourite movies page
        </p>
        <button className={btnStyle}>Take A Seat</button>
     </article>

     {/* Swipe container for the header images */}
     <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className='border-2 border-gold w-full md:w-1/3 h-2/3'
      >
      <SwiperSlide>
        <img src={DrStrange} alt="" className={swiperImageStyle} />
      </SwiperSlide>

      <SwiperSlide>
        <img src={DrStrange2} alt="" className={swiperImageStyle} />
      </SwiperSlide>

      <SwiperSlide>
        <img src={DrStrange} alt="" className={swiperImageStyle} />
      </SwiperSlide>

     </Swiper>     
    </section>
  )
}

export default Header
