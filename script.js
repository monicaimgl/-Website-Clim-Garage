
// BUTOANE SOCIAL MEDIA STICKY
 window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    var socialIcons = document.querySelector('.social-icons');

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      socialIcons.classList.add('scrolled');
    } else {
      socialIcons.classList.remove('scrolled');
    }
  }

  // ZOOM IN OUT GALERIE FOTO 
  // let zoomedStates = {};

  // function zoomInOut(img) {
  //   const isZoomed = zoomedStates[img.src] || false;

  //   if (isZoomed) {
  //     img.style.transform = 'scale(1)';
  //   } else {
  //     img.style.transform = 'scale(2)';
  //   }

  //   zoomedStates[img.src] = !isZoomed;
  // }


  let currentIndex = 0;
  const galleryPhotos = document.querySelectorAll('.galleryItem');

  function showImage(index) {
    galleryPhotos.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % galleryPhotos.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
    showImage(currentIndex);
  }