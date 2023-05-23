// Get DOM elements
const gallery = document.getElementById('gallery');
const body = document.querySelector('body');

// Image paths
const imagesPaths = [
  'img/kukurydza.jpg',
  'img/lato.jpg',
  'img/zima.jpg'
  // Add more image paths if desired
];

// Add images to the gallery
imagesPaths.forEach(imagePath => {
  const img = document.createElement('img');
  img.src = imagePath;
  gallery.appendChild(img);
});

// Get all images from the gallery
const images = document.querySelectorAll('#gallery img');

// Event handling for each image
images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.classList.add('hovered');
    body.classList.add('hovered');
  });

  image.addEventListener('mouseleave', () => {
    image.classList.remove('hovered');
    body.classList.remove('hovered');
  });

  image.addEventListener('click', () => {
    // Remove existing enlarged images
    const enlargedImages = document.querySelectorAll('.enlarged');
    enlargedImages.forEach(enlargedImage => {
      gallery.removeChild(enlargedImage);
    });

    // Create enlarged image
    const enlargedImage = document.createElement('img');
    enlargedImage.src = image.src;
    enlargedImage.classList.add('enlarged');
    gallery.appendChild(enlargedImage);

    enlargedImage.addEventListener('load', () => {
      // Center the enlarged image in the gallery
      const galleryRect = gallery.getBoundingClientRect();
      const enlargedImageRect = enlargedImage.getBoundingClientRect();
      const offsetX = galleryRect.left + galleryRect.width / 2 - enlargedImageRect.left - enlargedImageRect.width / 2;
      const offsetY = galleryRect.top + galleryRect.height / 2 - enlargedImageRect.top - enlargedImageRect.height / 2;

      enlargedImage.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    gallery.classList.add('enlarged');

    enlargedImage.addEventListener('click', event => {
      // Remove the enlarged image when clicked
      if (event.target.classList.contains('enlarged')) {
        gallery.removeChild(event.target);
        gallery.classList.remove('enlarged');
      }
    });
  });
});
