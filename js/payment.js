// Payment Details

const movieIndex = JSON.parse(localStorage.getItem('selectedMovieIndex'));

const movieBanner = document.querySelector('.movie-banner');
const movieTitle = document.getElementById('movieTitle');
const seatTotal = document.getElementById('seatTotal');
const dateTime = document.getElementById('dateTime');
const cityChoice = document.getElementById('cityChoice');
const cinemaChoice = document.getElementById('cinemaChoice');
const cinemaIndex = localStorage.getItem('selectedCinemaIndex');
const ticketHolder = document.getElementById('ticketHolder');

movieTitle.innerText = movies[movieIndex].title;
seatTotal.innerText = JSON.parse(localStorage.getItem('selectedSeats')).length;
dateTime.innerText = movies[0].dateTime;
cityChoice.innerText = localStorage.getItem('selectedCityName');
if(cinemaIndex == 0) {
    cinemaChoice.innerText = 'XXI';
} else if(cinemaIndex == 1) {
    cinemaChoice.innerText = 'CGV';
} else if(cinemaIndex == 2) {
    cinemaChoice.innerText = 'Flix Cinema';
}
const userArr = Storage.getUsers();
ticketHolder.innerText = userArr[0].username;

// Change Image
const imgSrc = movies[movieIndex].img;
movieBanner.src = imgSrc;

document.querySelector('#payment-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    const radio1 = document.getElementById('method-1');
    const radio2 = document.getElementById('method-2');
    const radio3 = document.getElementById('method-3');

    if (radio1.checked !== true || radio2.checked !== true || radio3.checked !== true) {
        alert('Please select a payment method!');
    }
});