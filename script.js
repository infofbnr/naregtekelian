// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.querySelector('.lightbox .close');
const galleryImages = document.querySelectorAll('.gallery-image');

// Open lightbox when image is clicked
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
    });
});

// Close lightbox when the close button is clicked
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (event) => {
    if (event.target !== lightboxImage) {
        lightbox.style.display = 'none';
    }
});
