import React from 'react'
import { useContext } from 'react'
import MovieCard from "../components/MovieCard";
import SearchContext from '../data/SearchContext'

const SearchPage = () => {

  const {movies} = useContext(SearchContext)

  return (
    <section className={`${movies.length === 0 ? 'h-screen' : 'h-auto'} py-10 px-5 md:px-14`}>  
      <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-10'>
        {movies.map((movie) => (
          <MovieCard  key={movie.id} {...movie}/>
        ))}
      </div>
      
    </section>
  )
}

export default SearchPage
