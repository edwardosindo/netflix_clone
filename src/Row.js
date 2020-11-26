import React, {useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

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

    console.log(movies);

    return (
        <div className="row">
        <h2>{title}</h2>

        <div className="row__posters">
            {/* several row__poster(s) */}
            {movies.map(movie => (
                    <img 
                    className="row__poster "
                    src={`${base_url}${movie.poster_path}`} 
                    alt={movie.name}/>
            ))}
        </div>
        {/* container */}

        </div>
    )
}
export default Row