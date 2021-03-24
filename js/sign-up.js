document.querySelector('#sign-up-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const pwdConfirm = document.querySelector('#pwdConfirm').value;
    const agree = document.querySelector('#agree');

    // Validate
    if (username === '' || email === '' || password === '' || pwdConfirm === '' || agree.checked == false) {
        UI.showAlert('Please fill in all fields', 'danger');
    } if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
        UI.showAlert('Email is invalid', 'danger');
    } else if(username.length < 5) {
        UI.showAlert('Username cannot be less than 5 characters', 'danger');
    } else if(password < 8) {
        UI.showAlert('Password must be at least 8 characters', 'danger');
    } else if(pwdConfirm != password) {
        UI.showAlert('Password does not match', 'danger');
    } else if (JSON.stringify(Storage.getUsers()).includes(username) === true) {
        UI.showAlert('User already exists!', 'danger');
    } else {
        // Instantiate user
        const user = new User(username, email, password);

        // Add user to storage
        Storage.addUser(user);

        // Show success message
        UI.showAlert('User Added', 'success');

        // Clear fields
        UI.clearFields();

        // Move to Home
        window.location.href = './index.html';

        // Greetings
        UI.showGreetings();
    }
});