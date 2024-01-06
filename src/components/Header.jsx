import React, { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Link } from 'react-router-dom';

const Header = () => {

  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const headerStyle = 'flex flex-col md:flex-row justify-between items-center gap-10 px-5 md:px-14 pt-10 pb-20'
  const btnStyle = 'bg-gold p-2 md:px-5 text-black w-1/2 md:w-1/4 hover:opacity-90'
  const swiperImageStyle = 'w-full h-1/4'

  // API to get movie image
  const API_IMG = 'https://image.tmdb.org/t/p/w500/'
  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
    .then(response => response.json())
    .then(data => {
      setIsLoading(false)
      setAllMovies(data.results)
    })
    .catch(err => {
      setIsLoading(false)
      console.error(err)});
    
  }, [])

  // used in the API calling
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjY0MWEwMDMyN2MzNjNiNDVmYTA0NzgyMDdkNTliMCIsInN1YiI6IjY0MWRmYWZhMzQ0YThlMDBmODc3MzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JVDP22nkAFa9FmfS4iazy2aGqh6qxV7GANq7_TqPUqI'
    }
  };

  // function when API is set to loading
  if(isLoading) {
    return <div className="flex justify-center items-center h-screen">
            <ClipLoader
              color={'#FFD700'}
              loading={isLoading}
              size={30}
          />
    </div>
  }

  return (
    <section className={headerStyle}>   
     <article className='flex flex-col gap-7 md:gap-10 items-stretch md:w-3/5'>
        <p className='text-4xl md:text-6xl text-gold md:w-10/12'>
          Get Movies Recommended For You
        </p>  
        <p className='md:w-11/12 text-lg md:text-xl'>
          EliteTV is a movie reviewing and recommendation platform that offers a variety of features. On this platform, users can read reviews of new and classic movies, different genre of movies, and add their favourite movies to their favourite movies page
        </p>
        <Link to='/all-movies'>
          <button className={btnStyle}>
            Take A Seat
          </button>
        </Link>
     </article>

     {/* Swipe container for the header images */}
     <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className='border-2 border-gold w-full md:w-1/3 h-2/3'
      >
        {allMovies.map((movie, index) => (
          <SwiperSlide key={index}>
            <img src={API_IMG + movie.poster_path} alt=''  className={swiperImageStyle} />
          </SwiperSlide>
        ))}
        
     </Swiper>     
    </section>
  )
}

export default Header
