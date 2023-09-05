import { createContext, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const SearchContext = createContext();

export function SearchProvider({ children }) {

    const[movieName, setMovieName] = useState('')
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const API_URL = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`
    
    // to get API when search button is clicked (to search for movies)
    const handleSubmit = (e) => {
        e.preventDefault()

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjY0MWEwMDMyN2MzNjNiNDVmYTA0NzgyMDdkNTliMCIsInN1YiI6IjY0MWRmYWZhMzQ0YThlMDBmODc3MzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JVDP22nkAFa9FmfS4iazy2aGqh6qxV7GANq7_TqPUqI'
            }
          };
    
        setIsLoading(true)
        fetch(API_URL, options)
        .then(response => response.json())
        .then(data => {
          setIsLoading(false)
          setMovies(data.results)
        })
        .catch(err => {
          setIsLoading(false)
          console.error(err)
        });    
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
        <SearchContext.Provider value={{handleSubmit, movies, setMovieName, isLoading}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext