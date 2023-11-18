// Courier Selection //
const buy_now = document.querySelector('#buy-btn');
const countryselector_Div = document.querySelector('.country-selector')
const close_courier = document.querySelector('#cross-circle');

// courier opening
buy_now.addEventListener('click', function () {
    countryselector_Div.classList.toggle('active');
})

// courier closing
close_courier.addEventListener('click', function () {
    countryselector_Div.classList.remove('active');
})

// Hiding and Showing diff. courier options for selected countries //
// Get the select elements for country and courier.
const countrySelect = document.querySelector('select[name="country"]');
const courierSelect = document.querySelector('select[name="courier"]');

// Add a change event listener to the country select element.
countrySelect.addEventListener('change', function () {
    // Get the selected country.
    const selectedCountry = this.value;

    // Hide all shipping methods.
    courierSelect.querySelectorAll('option').forEach(option => {
        option.hidden = true;
    });

    // Show the shipping methods that are available for the selected country.
    switch (selectedCountry) {
        case 'Sri Lanka':
            courierSelect.querySelector('option[value="Island Wide Standard"]').hidden = false;
            break;
    }
});

// Show the shipping methods for the currently selected country.
countrySelect.dispatchEvent(new Event('change'));

// Choosing country and courier >>> proceed //
// Get the select elements for country and courier.
const countrySelected = document.querySelector('select[name="country"]');
const courierSelected = document.querySelector('select[name="courier"]');

// Get the button element.
const button = document.querySelector('#proceed-btn');

// Add a click event listener to the button.
button.addEventListener('click', function () {
    // Get the selected country and courier.
    const selectedCountry = countrySelected.value;
    const selectedCourier = courierSelected.value;

    // Redirect the user to the appropriate website based on their selection.
    switch (selectedCountry) {
        case 'Sri Lanka':
            if (selectedCourier === 'Island Wide Standard') {
                window.location.href = 'https://payhere.lk/pay/o1b146a98';
            } else {
                alert('Choose your shipping method');
            }
            break;
        default:
            // Show an alert if the user has not selected a country or courier.
            alert('Choose your country and courier');
            return;
    }
});

const buybtnNav = document.querySelector('#buy-btn-nav');

buybtnNav.addEventListener('click', function() {
    countryselector_Div.classList.toggle('active');
})