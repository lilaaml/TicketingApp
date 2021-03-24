// Seat Choosing
const seating = document.querySelector('.seating');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const citySelect = document.getElementById('city');
const cinemaSelect = document.getElementById('cinema');

populateUI();

let ticketPrice = +cinemaSelect.value;

function setCityData(cityIndex, cityName) {
    localStorage.setItem('selectedCityIndex', cityIndex);
    localStorage.setItem('selectedCityName', cityName);
}

function setCinemaData(cinemaIndex, cinemaPrice) {
    localStorage.setItem('selectedCinemaIndex', cinemaIndex);
    localStorage.setItem('selectedCinemaPrice', cinemaPrice);
}

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Get data from localStorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedCinemaIndex = localStorage.getItem('selectedCinemaIndex');
    const selectedCityIndex = localStorage.getItem('selectedCityIndex');

    if (selectedCityIndex !== null || selectedCinemaIndex !== null) {
        citySelect.selectedIndex = selectedCityIndex;
        cinemaSelect.selectedIndex = selectedCinemaIndex;
    }
}

// City select event
citySelect.addEventListener('change', e => {
    setCityData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

// Cinema select event
cinemaSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setCinemaData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

// Seat clicked event
seating.addEventListener('click', (e) => {
   if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected'); 
    } 

    updateSelectedCount();
});

// Initial count and total set
updateSelectedCount();

document.querySelector('#seatForm').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats === null || selectedSeats.length < 1) {
        alert('Please select a seat!');
    } else {
        window.location.href = './payment.html';

        UI.showPaymentDetails();
    }
});