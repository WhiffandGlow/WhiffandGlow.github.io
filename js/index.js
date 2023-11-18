// Toggle Menubar
const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-list');
const menubarCross = document.querySelector('.ph-x');

menuIcon.addEventListener('click', function() {
    mobileMenu.classList.add('active');
});

menubarCross.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
})

// Reveal product navbar on scroll
window.addEventListener('scroll', function () {
    if (window.innerWidth >= 968) {
        if (window.scrollY > 370) {
            document.querySelector('.product-navbar').classList.add('active');
        } else {
            document.querySelector('.product-navbar').classList.remove('active');
        }
    } else if(window.innerWidth >= 550) {
        if(window.scrollY > 1125) {
            document.querySelector('.product-navbar').classList.add('active');
        } else {
            document.querySelector('.product-navbar').classList.remove('active');
        }
    } else if(window.innerWidth >= 500) {
        if(window.scrollY > 1000) {
            document.querySelector('.product-navbar').classList.add('active');
        } else {
            document.querySelector('.product-navbar').classList.remove('active');
        }
    } else if(window.innerWidth >= 375) {
        if(window.scrollY > 815) {
            document.querySelector('.product-navbar').classList.add('active');
        } else {
            document.querySelector('.product-navbar').classList.remove('active');
        }
    } else if(window.innerWidth >= 280) {
        if(window.scrollY > 740) {
            document.querySelector('.product-navbar').classList.add('active');
        } else {
            document.querySelector('.product-navbar').classList.remove('active');
        }
    } else {
        document.querySelector('.product-navbar').classList.remove('active');
    }
});

// Toggling images in the product page
// Get the elements for the main image and small images
const mainImage = document.querySelector('#main-img');
const smallImages = document.querySelectorAll('#small-img');

// Add a click event listener to each small image
smallImages.forEach(image => {
    image.addEventListener('click', () => {
        // Replace the main image source with the clicked image source
        mainImage.src = image.src;
    });
});

// Making the window scroll up when clicked on the small images
smallImages.forEach(image => {
    image.addEventListener('click', () => {
        event.preventDefault();

        window.scrollTo({
            top: 100,
            behavior: 'smooth'
        });
    });
});

// Making image of product navbar change every 2s
document.addEventListener("DOMContentLoaded", function () {

    const images = ["assets/black-forest/1.png", "assets/black-forest/4.png", "assets/black-forest/9.png", "assets/black-forest/6.png", "assets/black-forest/3.png"];
    let currentIndex = 0;
    const imageElement = document.getElementById("product-nav-img");

    function changeImage() {
        // Fade out the current image
        imageElement.style.opacity = 0;

        setTimeout(function () {
            // Change the image source
            imageElement.src = images[currentIndex];

            // Fade in the new image
            imageElement.style.opacity = 1;

            currentIndex = (currentIndex + 1) % images.length;
        }, 400); // Delay for 0.5 seconds (transition duration)
    }

    // Call the changeImage function every 2 seconds (2000 milliseconds)
    setInterval(changeImage, 2000);
});

document.addEventListener("DOMContentLoaded", function () {

    const images = ["assets/freesia/2.png", "assets/freesia/3.png", "assets/freesia/5.png", "assets/freesia/6.png", "assets/freesia/4.png"];
    let currentIndex = 0;
    const imageElement = document.getElementById("product-nav-img-2");

    function changeImage() {
        // Fade out the current image
        imageElement.style.opacity = 0;

        setTimeout(function () {
            // Change the image source
            imageElement.src = images[currentIndex];

            // Fade in the new image
            imageElement.style.opacity = 1;

            currentIndex = (currentIndex + 1) % images.length;
        }, 400); // Delay for 0.5 seconds (transition duration)
    }

    // Call the changeImage function every 2 seconds (2000 milliseconds)
    setInterval(changeImage, 2000);
});

document.addEventListener("DOMContentLoaded", function () {

    const images = ["assets/lavender/1.png", "assets/lavender/2.png", "assets/lavender/5.png", "assets/lavender/6.png", "assets/lavender/4.png"];
    let currentIndex = 0;
    const imageElement = document.getElementById("product-nav-img-3");

    function changeImage() {
        // Fade out the current image
        imageElement.style.opacity = 0;

        setTimeout(function () {
            // Change the image source
            imageElement.src = images[currentIndex];

            // Fade in the new image
            imageElement.style.opacity = 1;

            currentIndex = (currentIndex + 1) % images.length;
        }, 400); // Delay for 0.5 seconds (transition duration)
    }

    // Call the changeImage function every 2 seconds (2000 milliseconds)
    setInterval(changeImage, 2000);
});

document.addEventListener("DOMContentLoaded", function () {

    const images = ["assets/rose/2.png", "assets/rose/1.png", "assets/rose/1.png", "assets/rose/4.png"];
    let currentIndex = 0;
    const imageElement = document.getElementById("product-nav-img-4");

    function changeImage() {
        // Fade out the current image
        imageElement.style.opacity = 0;

        setTimeout(function () {
            // Change the image source
            imageElement.src = images[currentIndex];

            // Fade in the new image
            imageElement.style.opacity = 1;

            currentIndex = (currentIndex + 1) % images.length;
        }, 400); // Delay for 0.5 seconds (transition duration)
    }

    // Call the changeImage function every 2 seconds (2000 milliseconds)
    setInterval(changeImage, 2000);
});

document.addEventListener("DOMContentLoaded", function () {

    const images = ["assets/sandal-wood/4.png", "assets/sandal-wood/9.png", "assets/sandal-wood/7.png", "assets/sandal-wood/8.png", "assets/sandal-wood/6.png"];
    let currentIndex = 0;
    const imageElement = document.getElementById("product-nav-img-5");

    function changeImage() {
        // Fade out the current image
        imageElement.style.opacity = 0;

        setTimeout(function () {
            // Change the image source
            imageElement.src = images[currentIndex];

            // Fade in the new image
            imageElement.style.opacity = 1;

            currentIndex = (currentIndex + 1) % images.length;
        }, 400); // Delay for 0.5 seconds (transition duration)
    }

    // Call the changeImage function every 2 seconds (2000 milliseconds)
    setInterval(changeImage, 2000);
});

document.addEventListener("DOMContentLoaded", function () {

    const images = ["assets/strawberry/1.png", "assets/strawberry/4.png", "assets/strawberry/5.png", "assets/strawberry/5.png", "assets/strawberry/3.png"];
    let currentIndex = 0;
    const imageElement = document.getElementById("product-nav-img-6");

    function changeImage() {
        // Fade out the current image
        imageElement.style.opacity = 0;

        setTimeout(function () {
            // Change the image source
            imageElement.src = images[currentIndex];

            // Fade in the new image
            imageElement.style.opacity = 1;

            currentIndex = (currentIndex + 1) % images.length;
        }, 400); // Delay for 0.5 seconds (transition duration)
    }

    // Call the changeImage function every 2 seconds (2000 milliseconds)
    setInterval(changeImage, 2000);
});

document.addEventListener("DOMContentLoaded", function () {

    const images = ["assets/retro/1.png", "assets/retro/3.png", "assets/retro/5.png", "assets/retro/2.png"];
    let currentIndex = 0;
    const imageElement = document.getElementById("product-nav-img-7");

    function changeImage() {
        // Fade out the current image
        imageElement.style.opacity = 0;

        setTimeout(function () {
            // Change the image source
            imageElement.src = images[currentIndex];

            // Fade in the new image
            imageElement.style.opacity = 1;

            currentIndex = (currentIndex + 1) % images.length;
        }, 400); // Delay for 0.5 seconds (transition duration)
    }

    // Call the changeImage function every 2 seconds (2000 milliseconds)
    setInterval(changeImage, 2000);
});

document.addEventListener("DOMContentLoaded", function () {

    const images = ["assets/canned/9.png", "assets/canned/2.png", "assets/canned/7.png", "assets/canned/6.png", "assets/canned/4.png"];
    let currentIndex = 0;
    const imageElement = document.getElementById("product-nav-img-8");

    function changeImage() {
        // Fade out the current image
        imageElement.style.opacity = 0;

        setTimeout(function () {
            // Change the image source
            imageElement.src = images[currentIndex];

            // Fade in the new image
            imageElement.style.opacity = 1;

            currentIndex = (currentIndex + 1) % images.length;
        }, 400); // Delay for 0.5 seconds (transition duration)
    }

    // Call the changeImage function every 2 seconds (2000 milliseconds)
    setInterval(changeImage, 2000);
});

