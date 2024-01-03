function showTab(tabId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(tabId).style.display = 'block';
}


function login(event) {
    event.preventDefault();

    alert('You are logged in');

    showTab('game-list');
}

function register(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    if (!isValidName(name)) {
        alert('Please enter a valid name (letters only).');
        return;
    }

    if (!isValidName(surname)) {
        alert('Please enter a valid surname (letters only).');
        return;
    }

    if (!isValidPhone(phone)) {
        alert('Please enter a valid phone number (numbers only).');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Registration successful');
}

function isValidName(value) {
    return /^[A-Za-z]+$/.test(value);
}

function isValidPhone(value) {
    return /^[0-9]+$/.test(value);
}

function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}