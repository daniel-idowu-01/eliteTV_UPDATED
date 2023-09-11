import React from 'react'
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

function App() {

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
          <Navbar />
          <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/signup' element={ <SignUp /> } />
            <Route path='/savedmovies' element={ <SavedMovies /> } />
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