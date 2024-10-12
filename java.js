// JavaScript for changing images every 3 seconds
let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

function showNextImage() {
    // Hide the current image
    images[currentIndex].classList.remove('active');

    // Move to the next image
    currentIndex = (currentIndex + 1) % totalImages;

    // Show the next image
    images[currentIndex].classList.add('active');
}

// Change image every 3 seconds (3000 milliseconds)
setInterval(showNextImage, 2000);
