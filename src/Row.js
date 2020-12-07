import React, {useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // A snippet of code that runs based on a specific condition
    useEffect(() => {
        // if [], run once when the row loads, and dont run again, but when we pass in a variable (movies) it will runs once when the row loads and then run every single time the movies changes, we call that dependancy
        async function fetchdata() {
            const request = await axios.get(fetchUrl);
            //console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchdata();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "" )
            .then( url => {
                // https://www.youtube.com/watch?v=ytettetgdshjsj
                const urlParams = new URLSearchParams (new URL(url).search);
                setTrailerUrl(urlParams.get('v'));

            })
            .catch(error => console.log(error));
        }
    }
    //console.log(movies);

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
        <div className="row">
        <h2>{title}</h2>

        <div className="row__posters">
            {/* several row__poster(s) */}
            {movies.map((movie) => (
                    <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
                    alt={movie.name}/>
            ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}
export default Row