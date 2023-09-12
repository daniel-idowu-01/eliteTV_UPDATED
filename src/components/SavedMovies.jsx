import React, { useContext, useEffect, useState } from 'react'
import MoviesContext from '../data/MovieContext';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const SavedMovies = () => {

  const[newData, setNewData] = useState([])
  const { items } = useContext(MoviesContext)

  sessionStorage.setItem('items', JSON.stringify(items))
  
  useEffect(() => {
    if(sessionStorage.getItem('items')) {
      let data = JSON.parse(sessionStorage.getItem('items'))
      setNewData(data)
    }
  }, [])
  

    return (
      <div
       className={`${newData.length === 0 ? 'h-screen' : 'h-auto'} grid grid-cols-1 md:grid-cols-3 place-items-center gap-10 py-10 px-5 md:px-14`}>
            { newData.length > 0
             ?  
              newData.map((item) => (
                <Link to={`/search/${item.id}`} key={item.id}>
                  <MovieCard title={item.name} poster_path={item.image} vote_average={item.rating} />
                </Link>
              ))
            :
            <p>There are no saved movies</p>
            }
      </div>
    );
}

export default SavedMovies
