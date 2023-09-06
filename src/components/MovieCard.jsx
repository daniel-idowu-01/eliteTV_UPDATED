import React from 'react'

const MovieCard = ({ title, poster_path, vote_average}) => {

  // API to get movie image
  const API_IMG = 'https://image.tmdb.org/t/p/w500/'

  // to change the colors of the ratings
  const setVoteClass = (vote) => {
    if (vote >= 7) {
      return "text-green-500";
    } else if (vote >= 5) {
      return "text-orange-500";
    } else {
      return "text-red-500";
    }
  };

  return (
    <article className='border-2 border-gold hover:cursor-pointer hover:scale-105 transition-all'>
      <img
       src=
        { 
         poster_path 
        ?
         API_IMG + poster_path 
        :
         'https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGNpbmVtYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
        } 
        alt="" 
        />
      <section className='p-3'>
        <p className=''>{title ? title : 'N/A'}</p>
        {/* Ratings */}
        <p
         className={` ${setVoteClass(vote_average)}`}
        >
            {vote_average.toFixed(1) }
        </p>
      </section>
    </article>
  )
}

export default MovieCard
