// Get DOM elements
const gallery = document.getElementById('gallery');
const body = document.querySelector('body');

// Image paths
const imagesPaths = [
  'img/kukurydza.jpg',
  'img/lato.jpg',
  'img/zima.jpg',
  'img/zielen.jpg',
  'img/klos.jpg',
  'img/zachod.jpg',
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
    
    // Check if device is mobile
    if (window.innerWidth < 768) {
      // Scale up the image within the screen width
      const screenWidth = window.innerWidth;
      const imageWidth = image.offsetWidth;
      const scaleFactor = screenWidth / imageWidth;
      
      image.style.transform = `scale(${scaleFactor})`;
    } else {
      // Scale up the image
      image.style.transform = 'scale(1.5)';
    }
    
    image.style.transition = 'transform 0.3s ease';
  });

  image.addEventListener('mouseleave', () => {
    image.classList.remove('hovered');
    body.classList.remove('hovered');

    // Reset the image scale
    image.style.transform = 'scale(1)';
  });
});

