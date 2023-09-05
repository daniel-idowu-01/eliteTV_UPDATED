import Header from '../components/Header';
import Movies from '../components/Movies';
import Footer from '../components/Footer';
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Header />
      <hr className='border-none text-gold bg-gold h-0.5' />  
      <Movies />
      <Footer />
    </div>
  )
}

export default HomePage
