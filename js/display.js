// Movie Details: Now Playing & Upcoming

const movieIndex = JSON.parse(localStorage.getItem('selectedMovieIndex'));

const movieBanner = document.querySelector('.movie-banner');
const synopsis = document.querySelector('.synopsis');
const genre = document.querySelector('.genre');
const duration = document.querySelector('.duration');
const director = document.querySelector('.director');
const producers = document.querySelector('.producers');
const screenplay = document.querySelector('.screenplay');
const cast = document.querySelector('.cast');
const trailer = document.querySelector('.trailer');

// Change image source
const imgSrc = movies[movieIndex].img;
movieBanner.src = imgSrc;

synopsis.innerHTML = movies[movieIndex].synopsis;
genre.innerHTML = movies[movieIndex].genre;
duration.innerHTML = movies[movieIndex].duration;
director.innerHTML = movies[movieIndex].director;
producers.innerHTML = movies[movieIndex].producers;
screenplay.innerHTML = movies[movieIndex].screenplay;
cast.innerHTML = movies[movieIndex].cast;

// Change trailer source
const trailerSrc = movies[movieIndex].trailer;
trailer.src = trailerSrc;