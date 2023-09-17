import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import MovieCard from "../components/MovieCard";
import SearchContext from '../data/SearchContext'

const SearchPage = () => {

  // to get the movie array from the SearchContext
  const {movies} = useContext(SearchContext)
  const containerStyle = `${movies.length === 0 ? 'h-screen' : 'h-auto'} flex justify-center items-center py-10 px-5 md:px-14`
  
  return (
    <section className={containerStyle}>  
      {
      movies.length === 0
       ? 
      <p className='opacity-50'>No movies searched for</p>
       : 
      <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-10'>
        {movies.map((movie) => (
          <Link to={`/search/${movie.id}`} key={movie.id}>
            <MovieCard  key={movie.id} {...movie}/>
          </Link>
        ))}
      </div>}
      
    </section>
  )
}

export default SearchPage
