const KEY = "a6c2206a8d028e6d1935f3b46ada483d";
const BASE_URL = 'https://api.themoviedb.org/3'; 

 async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
} 

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}

 export function fetchMoviesSearch(searchName) {
  return fetchWithErrorHandling(`${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${searchName}&page=1&include_adult=false`);
}

export function fetchMovieById(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`); 
}

export function fetchMovieCastById(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`); 
}

export function fetchMovieReviewsById(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`); 
}
