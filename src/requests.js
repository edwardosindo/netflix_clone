const API_KEY = "108477d1d408e1f3246b160788b58232";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}`,
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;