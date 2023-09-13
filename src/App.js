import React, { useEffect, useState } from 'react'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './components/Nav';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SavedMovies from './components/SavedMovies';
import SingleMovie from './components/SingleMovie';
import { Routes, Route } from 'react-router-dom';
import { MoviesProvider } from './data/MovieContext';
import { SearchProvider } from './data/SearchContext';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate()

  // token we got from supabase is saved in the token state
  const [token, setToken] = useState(false)
  
  if(token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])

  // function to log user out
  const handleLogOut = () => {
    sessionStorage.removeItem('token');
    navigate('/login')
  }

  /* scroll to top action */
  const scrollToTop = () => {
    window.scrollTo(
      {
        top: 0,
        behavior: 'smooth'
      }
    )
  }

  const scrollToTopStyle = 'bg-gold text-deepNavyBlue z-20 outline-none fixed bottom-10 right-10 shadow-md rounded-full p-3 px-4'

  return (
    <div className='app bg-deepNavyBlue bg-opacity-90 text-white'>
      <SearchProvider>
        <MoviesProvider>
          <Navbar token={token} handleLogOut={handleLogOut} />
          <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/login' element={ <Login setToken={setToken} /> } />
            <Route path='/signup' element={ <SignUp /> } />
            {token ? <Route path='/savedmovies' element={ <SavedMovies /> }  /> : navigate('/login')}
            <Route path='/search' element={ <SearchPage /> } />
            <Route path='/search/:movieId' element={ <SingleMovie /> } />
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