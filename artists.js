// Artist toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const artistNames = document.querySelectorAll('.artist-name');
  
  artistNames.forEach(artistName => {
    artistName.addEventListener('click', () => {
      const artistId = artistName.getAttribute('data-artist');
      const content = document.getElementById(`${artistId}-content`);
      
      // Close all other artist contents
      document.querySelectorAll('.artist-content').forEach(otherContent => {
        if (otherContent !== content) {
          otherContent.classList.remove('active');
        }
      });
      
      // Toggle current content
      content.classList.toggle('active');
    });
  });
});
