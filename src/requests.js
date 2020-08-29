const API_KEY='f08bb2f3a0c167e57d9fd36bd0c59ef1';

export default {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&
    language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&
    language=en-US`,
    fetchActionMovies:`discover/movie?api_key=${API_KEY}&
    with_genre=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&
    with_genre=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&
    with_genre=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&
    with_genre=10749`,
    fetchMysteryMovies:`/discover/movie?api_key=${API_KEY}&
    with_genre=9648`,
    fetchSciFi:`/discover/movie?api_key=${API_KEY}&
    with_genre=878`,
    fetchWestern:`/discover/movie?api_key=${API_KEY}&
    with_genre=37`,
    fetchAnimation:`/discover/movie?api_key=${API_KEY}&
    with_genre=16`,
    fetchTv:`/discover/movie?api_key=${API_KEY}&
    with_genre=10770`,
};
