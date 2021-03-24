let isLoggedIn = false;

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

class Storage {
    static getUsers() {
        let users;
        if (localStorage.getItem('users') === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem('users'));
        }

        return users;
    }

    static addUser(user) {
        const users = Storage.getUsers();

        // pushes a new object into the array
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        console.log(`Users: ${users}`);
    }
}

class UI {
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `mb-4 alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('#parent');
        const form = document.querySelector('#sign-up-form');
        container.insertBefore(div, form);

        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static showGreetings() {
        const greetingMsg = document.getElementById('greeting');
        const userList = Storage.getUsers();

        greetingMsg.innerText = `Welcome back, ${userList[0].username}`;
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#login-form');
        container.insertBefore(div, form);

        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#username').value = '';
        document.querySelector('#password').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#pwdConfirm').value = '';
        document.querySelector('#agree').value = '';
    }

    static showPaymentDetails() {
        const pdName = document.getElementById('#pdName');
        const name = Storage.getUsers();
        const fullName = `${name[0].username}`;
        pdName.appendChild(document.createTextNode(fullName));
    }
}

document.querySelector('#login-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Validate
    if (username === '' || password === '') {
        alert('Please fill in all fields');
    } else if (JSON.stringify(Storage.getUsers()).includes(username) === false) {
        alert('User doesn\'t exist');
    } else {
        isLoggedIn = true;
        // Show success message
        alert('You are logged in');

        // Clear fields [NOT WORKING]
        document.querySelector('#username').value = '';
        document.querySelector('#password').value = '';

        // Show the welcome message
        UI.showGreetings();
    }
});

function setMovieData(movieIndex) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
}

document.querySelector('#np-list').addEventListener('click', (e) => {

    let movieIndex = 0;

    if (e.target.classList.contains('movie-1') === true) {
        console.log('clicked');
        movieIndex = 0;
    } else if (e.target.classList.contains('movie-2') === true) {
        movieIndex = 1;
    } else if (e.target.classList.contains('movie-3') === true) {
        movieIndex = 2;
    } else if (e.target.classList.contains('movie-4') === true) {
        movieIndex = 3;
    } else if (e.target.classList.contains('movie-5') === true) {
        movieIndex = 4;
    }

    setMovieData(movieIndex);
});

document.querySelector('#uc-list').addEventListener('click', (e) => {

    let movieIndex = 0;

    if (e.target.classList.contains('movie-6') === true) {
        movieIndex = 5;
    } else if (e.target.classList.contains('movie-7') === true) {
        movieIndex = 6;
    } else if (e.target.classList.contains('movie-8') === true) {
        movieIndex = 7;
    } else if (e.target.classList.contains('movie-9') === true) {
        movieIndex = 8;
    } else if (e.target.classList.contains('movie-10') === true) {
        movieIndex = 9;
    }

    setMovieData(movieIndex);
});