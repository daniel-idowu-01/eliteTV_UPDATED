import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';

function App() {

  const [movies, setMovies] = useState([])
  const[term, setTerm] = useState('')
  const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=12641a00327c363b45fa0478207d59b0&language=en-US'
  const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=12641a00327c363b45fa0478207d59b0&query='

  // to get API for movies
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
  },[])

  console.log(movies)

  // to get API when search button is clicked (to search for movies)
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(API_SEARCH + term)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
  }

      

  return (
    <div className=' bg-black'>
      <p className='text-4xl font-sans text-center text-red-700 pt-5 mb-5'>EliteTv</p>
      <div className='flex justify-center items-center mb-5'>
        <form onSubmit={handleSubmit}>
          <input 
           type='text'
           placeholder='Search movie...' 
           onChange={(e) => setTerm(e.target.value)} 
           className='p-2 w-72 outline-none'
          />
          <button className='bg-red-500 p-2 px-5'>Search</button>
        </form>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 place-items-center'>
        { movies.map((movie) => (
          <MovieCard {...movie}/>
        )
          
        )}
        
      </div>
      
    </div>
  );
}

export default App;
