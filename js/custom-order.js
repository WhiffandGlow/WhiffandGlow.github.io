const scriptURL = 'https://script.google.com/macros/s/AKfycbx9YBXHZ1t-WMZdla1_zEu3oMLi3PqWeTx2Aff4VDeUKogq2Q5retM_FNG64jCtSq15/exec'
const form = document.forms['custom-order-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
        
        const firstnameValue = document.getElementById('firstname').value.trim();
        const lastnameValue = document.getElementById('lastname').value.trim();
        const phonenumberValue = document.getElementById('phonenumber').value.trim();
        const emailValue = document.getElementById('email').value.trim();
        const customorderValue = document.getElementById('orderreq').value.trim();

        if (firstnameValue && emailValue && lastnameValue && phonenumberValue && emailValue && customorderValue) {
            alert('Custom inquiry sent');
            document.getElementById('firstname').value = '';
            document.getElementById('lastname').value = '';
            document.getElementById('phonenumber').value = '';
            document.getElementById('email').value = '';
            document.getElementById('orderreq').value = '';
          } else {
            alert('Please fill out the form');
        }
})