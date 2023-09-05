import React, { useContext } from 'react'
import SearchContext from '../data/SearchContext'
import { Link, useNavigate } from 'react-router-dom'


const Nav = () => {

  const {handleSubmit, setMovieName} = useContext(SearchContext)
  const btnStyle = 'bg-gold p-2 md:px-5 text-black'
  const searchInputStyle = 'p-2 w-32 md:w-72 outline-none text-black rounded-none'
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/search')
  }

  return (
    <nav className='flex justify-between items-center p-5 md:py-7 md:px-14'>
        <Link to='/'>
          <p className='text-xl md:text-4xl text-center text-gold font-semibold'>
            EliteTV
          </p>
        </Link>
        <div
        className='flex gap-5 md:gap-10 items-center'>
            <form onSubmit={handleSubmit}>

              <input 
              type='text'
              placeholder='Search movie...'
              onChange={(e) => setMovieName(e.target.value)}
              className={searchInputStyle}
              />

              <button
               className={btnStyle}
               onClick={handleNavigate}>
                Search
              </button>
              
            </form>

            <Link to='/login'> <button className={btnStyle}>Login</button> </Link>
        </div>
   </nav>
  )
}

export default Nav
