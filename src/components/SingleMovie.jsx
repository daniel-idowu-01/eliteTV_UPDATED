import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube';
import ClipLoader from "react-spinners/ClipLoader";

const SingleMovie = () => {

    const [eachMovie, setEachMovie] = useState([])
    const [prodCompany, setProdCompany] = useState([])
    const [video, setVideo] = useState([])
    const [isLoading, setIsLoading] = useState(false);
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
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options_2)
            const data = await response.json()
            setVideo(data.results[0])
        }
        fetchVideo()
    }, [])

    console.log(video)

    
    // used in the API calling
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjY0MWEwMDMyN2MzNjNiNDVmYTA0NzgyMDdkNTliMCIsInN1YiI6IjY0MWRmYWZhMzQ0YThlMDBmODc3MzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JVDP22nkAFa9FmfS4iazy2aGqh6qxV7GANq7_TqPUqI'
        }
    };

    const options_2 = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjY0MWEwMDMyN2MzNjNiNDVmYTA0NzgyMDdkNTliMCIsInN1YiI6IjY0MWRmYWZhMzQ0YThlMDBmODc3MzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JVDP22nkAFa9FmfS4iazy2aGqh6qxV7GANq7_TqPUqI'
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
        <article className='flex flex-col md:flex-row justify-items-stretch gap-10 md:gap-20'>
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
                    <p>Original Language: {eachMovie.original_language}</p>
                    <p>Runtime: <span>{eachMovie.runtime} minutes</span></p>
                    <p>Release Date: <span>{eachMovie.release_date}</span></p>
                </article>
                <p>Production Companies: </p>
                <div className='grid grid-cols-3 place-items-center gap-5 relative top-5'>
                    { prodCompany.map((company) => (
                        <div key={company.id} className='w-20'>  
                            <img src={API_IMG + company.logo_path} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </article>

        {/* Movie Video */}
        <div className="relative top-10">
            <iframe
                className="w-full"
                height="500"
                src={`https://www.youtube.com/embed/${video.key}`}
                allowFullScreen
            >  
            </iframe>
        </div>
       
    </section>
  )
}

export default SingleMovie
