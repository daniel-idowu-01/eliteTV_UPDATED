import React, { useState, useEffect } from 'react'
import './index.css'

function MovieCard(props) {

   /* To show movie details */
   const [content, setContent] = useState(false)
   const showContent = () => {
     setContent(!content)
   }

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

  // To get genre of the movies
  const genreList = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
  };
  let genreName = "Unknown";
  const id = props.genre_ids[0];
  const name = genreList[id];
  if (name === undefined) {
    genreName = "Unknown";
  } else {
    genreName = name;
  }  // ##########################


  const movieDate = props.release_date
  const slicedDate = movieDate && movieDate.slice(0, 4)

  return (
    <div onClick={showContent} className='w-96 md:aspect-w-1 md:aspect-h-1 relative m-2 bg-gray-900 p-2 card '>
      <div>
        <div>
          <img src={ props.poster_path ? API_IMG + props.poster_path : 'https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGNpbmVtYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' } alt='' />
        </div>

      </div> 

      <div>
        <p className='text-red-700 text-xl'>{ props.title }</p>
        <p className={` ${setVoteClass(props.vote_average)}`}>{ props.vote_average.toFixed(1) }</p>

        <div className='flex justify-between'>
          <p className='text-white'>{genreName}</p>
          <p className='text-white'>{slicedDate}</p>
        </div>
      </div>

      <div className={` ${content ? 'block' : 'hidden'} desc absolute top-0 right-0 left-0 bottom-0 p-2 bg-gray-900 leading-10 overflow-y-scroll`}>
          <p className='text-white text-justify font-mono'>{props.overview}</p>
        </div>

    </div>
  )
}

export default MovieCard

