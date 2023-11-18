const scriptURL = 'https://script.google.com/macros/s/AKfycbyyL7et7rVSV4zFzK4vLRv0VWvWaP8h7hIGMUBMvy3x8bMsqkyhQfBcjAzJAgBLNjq9/exec'
const form = document.forms['contact-us-sheets']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))

        const firstnameValue = document.getElementById('firstname').value.trim();
        const lastnameValue = document.getElementById('lastname').value.trim();
        const phonenumberValue = document.getElementById('phonenumber').value.trim();
        const emailValue = document.getElementById('email').value.trim();
        const customorderValue = document.getElementById('feedback').value.trim();

        if (firstnameValue && emailValue && lastnameValue && phonenumberValue && emailValue && customorderValue) {
            alert('Your Feedback has been sent');
            document.getElementById('firstname').value = '';
            document.getElementById('lastname').value = '';
            document.getElementById('phonenumber').value = '';
            document.getElementById('email').value = '';
            document.getElementById('orderreq').value = '';
          } else {
            alert('Please fill out the form');
        }
})