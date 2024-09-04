const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});