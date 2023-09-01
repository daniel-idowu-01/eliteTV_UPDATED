import Movies from '../components/Movies';
import Header from '../components/Header';
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Header />
      <hr className='border-none text-gold bg-gold h-0.5' />  
      <Movies />
    </div>
  )
}

export default HomePage
