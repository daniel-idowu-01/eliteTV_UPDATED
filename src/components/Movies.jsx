import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'
import genreData from '../data/genreData.json'
import ClipLoader from "react-spinners/ClipLoader";

const Movies = () => {
  
    const [activeNav, setActiveNav] = useState('#');
    const [allMovies, setAllMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [selectedGenreIds, setSelectedGenreIds] = useState([28, 35, 27, 16])
    const linkStyle = 'cursor-pointer transition-all'
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

    //////////////////////////////

    // THANK YOU CHATGPT

    const genreIdToNameMap = {};
    genreData.genres.forEach(genre => {
        genreIdToNameMap[genre.id] = genre.name;
    });

    // Filter movies based on genre IDs that match any genre ID in the `selectedGenreIds` array
    const filteredMovies = allMovies.filter(movie =>
      movie.genre_ids.some(genreId => selectedGenreIds.includes(genreId))
    );

    // Map genre IDs to genre names for each movie
    const moviesWithGenreNames = filteredMovies.map(movie => ({
      ...movie,
      genre_names: movie.genre_ids.map(genreId => genreIdToNameMap[genreId]),
    }));

    // THANK YOU CHATGPT

    //////////////////////////////

    // function when all link is clicked 
    const allLinks = () => {
      setActiveNav('#')
      setSelectedGenreIds([28, 35, 27, 16])
    }

    // function when the action link is clicked
    const actionLink = () => {
      setActiveNav('#action')
      setSelectedGenreIds([28])
    }

    // function when the comedy link is clicked
    const comedyLink = () => {
      setActiveNav('#comedy')
      setSelectedGenreIds([35])
    }

    // function when the horror link is clicked
    const horrorLink = () => {
      setActiveNav('#horror')
      setSelectedGenreIds([27])
    }

    // function when the animation link is clicked 
    const animationLink = () => {
      setActiveNav('#animation')
      setSelectedGenreIds([16])
    }
    
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
    <section className='' id='movies'>
        {/* Links to show the movies selected */}
        <div className='flex justify-evenly items-center px-5 md:px-14 py-10'>
            <p
             onClick={allLinks} 
             className={`${linkStyle}
                         ${activeNav === '#' ? 'text-gold' : ''} transition-all`}>
              All
            </p>
            <p
             onClick={actionLink} 
             className={`${linkStyle}
                         ${activeNav === '#action' ? 'text-gold' : ''} transition-all`}>
              Action
            </p>
            <p
             onClick={comedyLink} 
             className={`${linkStyle}
                        ${activeNav === '#comedy' ? 'text-gold' : ''} transition-all`}>
              Comedy
            </p>
            <p
             onClick={horrorLink} 
             className={`${linkStyle}
                         ${activeNav === '#horror' ? 'text-gold' : ''} transition-all`}>
              Horror
            </p>
            <p
             onClick={animationLink} 
             className={`${linkStyle}
                         ${activeNav === '#animation' ? 'text-gold' : ''} transition-all`}>
              Animation
            </p>
        </div>
        <hr className='border-none text-gold bg-gold h-0.5' />

        {/* Movies to show based on the links clicked */}
        <div className={moviesContainer}>
          {
            moviesWithGenreNames.map((result) => {
              if(result.title){
                return <Link to={`/search/${result.id}`} key={result.id}>
                  <MovieCard {...result} />
                </Link>
              }
              
            })
          }
        </div>
    </section>
  )
}

export default Movies
