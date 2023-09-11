import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import MoviesContext from '../data/MovieContext';

const SingleMovie = () => {

    const [eachMovie, setEachMovie] = useState([])
    const [prodCompany, setProdCompany] = useState([])
    const [video, setVideo] = useState([])
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const {addToMovies} = useContext(MoviesContext)
    const { movieId } = useParams();

    // API to get movie image
    const API_IMG = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        // api to get data about the movie
        setIsLoading(true);
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
        .then(response => response.json())
        .then(data => {
            setIsLoading(false)
            setEachMovie(data)
            setProdCompany(data.production_companies)
        })
        .catch(err => {
          setIsLoading(false)
          console.error(err)
        });

        // api for the youtube video of the movie
        const fetchVideo = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
            const data = await response.json()
            setVideo(data.results[0])
        }
        fetchVideo();
          
        // api for the reviews of the movie
        const fetchReviews = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options)
            const data = await response.json()
            setReviews(data.results)
        }
        fetchReviews();
    }, [])

    // used in the API calling
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjY0MWEwMDMyN2MzNjNiNDVmYTA0NzgyMDdkNTliMCIsInN1YiI6IjY0MWRmYWZhMzQ0YThlMDBmODc3MzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JVDP22nkAFa9FmfS4iazy2aGqh6qxV7GANq7_TqPUqI'
        }
    };

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

      // function when API is set to loading
    if(isLoading) {
        return  <div className="flex justify-center items-center h-screen">
                    <ClipLoader
                        color={'#FFD700'}
                        loading={isLoading}
                        size={30}
                    />
                </div>
    }

  return (
    <section className='px-5 md:px-14 py-10'>
        <Link to='/search'>
            <span className="material-symbols-outlined opacity-50">
                arrow_back
            </span>
        </Link>
        <article className='flex flex-col md:flex-row justify-items-stretch gap-20 md:gap-20'>
            {/* Movie Image */}
            <img
                src=
                { 
                eachMovie.poster_path 
                ?
                API_IMG + eachMovie.poster_path 
                :
                'https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGNpbmVtYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
                } 
                className='border-2 border-gold'
                alt="" 
            />

            {/* Movie Details/Data */}
            <div className='flex flex-col gap-5'>
                <p className='text-6xl text-gold'>{eachMovie.title}</p>
                <a
                 href={eachMovie.homepage}
                 target='_blank'
                 className='flex items-center gap-1'>
                    <span className='underline'>Click To View Home Page</span> <span className="material-symbols-outlined">open_in_new</span>
                </a>
                <p className='w-fit px-2 border-l-2 border-gold'>MOVIE INFO</p>
                <p className='text-xl text-justify'>{eachMovie.overview}</p>
                <article>
                    <p>Genre: {eachMovie.genres !== undefined ? eachMovie.genres.map((genre) => <span>{genre.name} </span>) : <span>N/A</span>}</p>
                    <p>Original Language: {eachMovie.original_language}</p>
                    <p>Runtime: <span>{eachMovie.runtime} minutes</span></p>
                    <p>Release Date: <span>{eachMovie.release_date}</span></p>
                    <p>Rating: 
                         <span className={`${setVoteClass(eachMovie.vote_average)}`}>
                            {' ' + eachMovie.vote_average}
                        </span>
                    </p>
                </article>
                <p>Production Companies: </p>
                <div className=' grid grid-cols-2 md:grid-cols-3 place-items-center mb-24 md:mb-0'>
                    { prodCompany.length > 0 ? prodCompany.map((company) => (
                        <div key={company.id} className='border border-gold h-full w-full p-10'>  
                            <img src={API_IMG + company.logo_path} alt="" />
                        </div>
                    )) : ''}
                </div>
                <button
                    onClick={() => addToMovies(eachMovie.id, eachMovie.title, API_IMG + eachMovie.poster_path , eachMovie.vote_average)}
                    className='w-1/4 bg-gold px-8 py-2 mt-8 text-black hover:opacity-75 hover:text-white'>
                        Save Movie
                </button>
            </div>
        </article>

        {/* Movie Video */}
        <div className="relative top-10 mb-20">
            { video === undefined 
                ? 
            <iframe
                className="w-full"
                height="500"
                src='https://www.youtube.com/watch?v=yhtl5fqJIMw'
                allowFullScreen
            >  
            </iframe> 
                : 
            <iframe
            className="w-full"
            height="500"
            src={`https://www.youtube.com/embed/${video.key}`}
            allowFullScreen
        >  
        </iframe> }
        </div>
        
        {/* Movie Reviews */}
        <section className="">
            <p className='w-fit px-2 border-l-2 border-gold'>REVIEWS</p>
            <div className='mb-5'></div> {/* The div is used to space the reviews from the review header */}
            {reviews.length === 0
             ? 
             <p>No reviews</p>
              :
              reviews.map((review) => (
                <article className='flex items-start gap-2' key={review.id}>
                    {/* Each review c ontent */}
                    <img
                     className='rounded-full h-10 w-10 p-0 m-0' 
                     src={
                        review.author_details.avatar_path 
                        ?
                        API_IMG + review.author_details.avatar_path
                         : 
                        "https://th.bing.com/th?id=OIP.xo-BCC1ZKFpLL65D93eHcgHaGe&w=210&h=183&c=8&rs=1&qlt=30&o=6&pid=3.1&rm=2"}
                         alt=""
                    />
                    <div key={review.id} className='my-2 text-justify'>
                        <p className='font-semibold'>{review.author_details.name ? review.author_details.name : 'N/A'}</p>
                        <p>{review.content}</p>
                    </div>
                </article>
            )) }
        </section>
       
    </section>
  )
}

export default SingleMovie
