const scriptURL = 'https://script.google.com/macros/s/AKfycbwR6PDefRf7gkBh9-QmRcrc_AHekXMG8g9jA9SligAcdq9xwKATiUPGi8PlGqzFl5agvA/exec'
const form = document.forms['newsletter-us-sheets']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))

    const emailValue = document.getElementById('email').value.trim();

    if (emailValue) {
        alert('You\'ve successfully subscribed for email updates');
        document.getElementById('email').value = '';
    } else {
        alert('Please type in your email address');
    }
})