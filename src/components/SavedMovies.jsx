import React, { useContext } from 'react'
import MoviesContext from '../data/MovieContext';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const SavedMovies = () => {

  const { items } = useContext(MoviesContext)

    return (
      <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-10 py-10 px-5 md:px-14'>
            { items.length > 0
             ?
              items.map((item, index) => (
                <Link to={`/search/${item.id}`} key={item.id}>
                  <MovieCard title={item.name} poster_path={item.image} vote_average={item.rating} />
                </Link>
              ))
            :
            <p>There are no saved meal</p>
            }
      </div>
    );
}

export default SavedMovies
