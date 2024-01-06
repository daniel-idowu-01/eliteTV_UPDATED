import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard';
import ClipLoader from "react-spinners/ClipLoader";

const MoviesPage = () => {

  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const moviesContainer = 'grid grid-cols-1 md:grid-cols-3 place-items-center gap-10 py-10 px-5 md:px-14'

   useEffect(() => {
      setIsLoading(true);
      fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
      .then(response => response.json())
      .then(data => {
        setIsLoading(false)
        setAllMovies(data.results)
      })
      .catch(err => {
        setIsLoading(false)
        console.error(err)});
      
   }, [])
  
  // used in the API calling
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjY0MWEwMDMyN2MzNjNiNDVmYTA0NzgyMDdkNTliMCIsInN1YiI6IjY0MWRmYWZhMzQ0YThlMDBmODc3MzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JVDP22nkAFa9FmfS4iazy2aGqh6qxV7GANq7_TqPUqI'
      }
  };
  
  // function when API is set to loading
    if(isLoading) {
      return <div className="flex justify-center items-center h-screen">
              <ClipLoader
                color={'#FFD700'}
                loading={isLoading}
                size={30}
            />
      </div>
    }
  
  return (
        <div className={moviesContainer}>
          {
            allMovies.map((result) => {
              if(result.title){
                return <Link to={`/search/${result.id}`} key={result.id}>
                  <MovieCard {...result} />
                </Link>
              }
              
            })
          }
        </div>
  )
}

export default MoviesPage
