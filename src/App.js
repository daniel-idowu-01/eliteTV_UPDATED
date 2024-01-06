import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { MoviesProvider, SearchProvider } from './data';
import { Nav, SavedMovies, SingleMovie } from './components';
import { Login, SignUp, HomePage, NotFound, SearchPage, MoviesPage } from './pages';


function App() {

  // token we got from supabase is saved in the token state
  const [token, setToken] = useState(false)
  
  if(token) {
    localStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    if(localStorage.getItem('token')) {
      let data = JSON.parse(localStorage.getItem('token'))
      setToken(data)
    }
  }, [])

  /* scroll to top action */
  const scrollToTop = () => {
    window.scrollTo(
      {
        top: 0,
        behavior: 'smooth'
      }
    )
  }

  const scrollToTopStyle = 'bg-gold text-deepNavyBlue z-20 outline-none fixed bottom-10 right-10 shadow-md rounded-full p-3 px-4 hover:opacity-90'

  return (
    <div className='app bg-deepNavyBlue bg-opacity-90 text-white'>
      <SearchProvider>
        <MoviesProvider>
          <Nav token={token} />
          <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/login' element={ <Login setToken={setToken} /> } />
            <Route path='/signup' element={ <SignUp /> } />
            <Route path='/savedmovies' element={ <SavedMovies /> }  />
            <Route path='/search' element={ <SearchPage /> } />
            <Route path='/all-movies' element={ <MoviesPage /> } />
            <Route path='/search/:movieId' element={ <SingleMovie token={token} /> } />

            <Route path='*' element={ <NotFound /> } />
          </Routes>
        </MoviesProvider>
      </SearchProvider>

      <button
       onClick={scrollToTop}
       className={scrollToTopStyle}>
        <span className="material-symbols-outlined">
          arrow_upward
        </span>
       </button>
      
    </div>
  );
}

export default App;