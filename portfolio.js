function openGallery(projectId) {
    document.getElementById(projectId).style.display = 'block';
  }
  
  function closeGallery() {
    const galleries = document.querySelectorAll('.gallery-view');
    galleries.forEach(gallery => {
      gallery.style.display = 'none';
    });
  }
  