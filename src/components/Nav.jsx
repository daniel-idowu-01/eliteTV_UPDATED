import React, { useContext, useState } from 'react'
import { FaBars } from "react-icons/fa"
import { VscChromeClose } from "react-icons/vsc"
import { Link, useNavigate } from 'react-router-dom'
import SearchContext from '../data/SearchContext'


const Nav = ({ token }) => {

  const {handleSubmit, setMovieName} = useContext(SearchContext)
  const btnStyle = 'bg-gold p-2 md:px-5 text-black'
  const searchInputStyle = 'p-2 w-32 md:w-72 outline-none text-black rounded-none'
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/search')
  }

  const [sideBar, setShowSideBar] = useState(false)
  const sideBarStyle =  `${sideBar ? 'flex' : 'hidden'} md:hidden flex-col gap-10 text-center w-full transition-all shadow-md p-10`

  const showSideBar = () => {
    setShowSideBar(!sideBar)
  }

  return (
    <nav>
      <div className='flex justify-between items-center p-5 md:py-7 md:px-14'>
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
                name='movie'
                placeholder='Search movie...'
                onChange={(e) => setMovieName(e.target.value)}
                className={searchInputStyle}
                />

                <button
                type='submit'
                className={btnStyle}
                onClick={handleNavigate}>
                  Search
                </button>                
              </form>

              <Link
                className={`${btnStyle} hidden md:block`}
                to='/savedmovies'
                onClick={() => setShowSideBar(false)}
                >
                  Saved Movies
              </Link>

              {token ? '' : <Link to='/login'> <button className={`${btnStyle} hidden md:block`}>Login</button> </Link>}
              {/* Hamburger Menu */}
              { sideBar ?
            <VscChromeClose className='text-2xl md:hidden cursor-pointer' onClick={showSideBar} />
            :
            <FaBars className='text-2xl md:hidden cursor-pointer' onClick={showSideBar} />
          }          
          </div>
      </div>
        
        {/* SideBar For Mobile */}
      <div className={sideBarStyle}>
        <Link
         className='' to='/'
         onClick={() => setShowSideBar(false)}
         >
          Home
        </Link>

        <Link
         className='' to='/savedmovies'
         onClick={() => setShowSideBar(false)}
         >
          Saved Movies
        </Link>

        {token ? '' : <div className='flex gap-3 justify-center'>
          <Link
           to='/login'
           onClick={() => setShowSideBar(false)}     
           > 
            <button className={`${btnStyle} px-5`}>
              Login
            </button> 
          </Link>

          <Link
           to='/signup'
           onClick={() => setShowSideBar(false)}
           > 
           <button className={`${btnStyle} px-5`}>
            Sign Up
            </button> 
          </Link>
        </div>}
        
      </div>
       
   </nav>
  )
}

export default Nav
