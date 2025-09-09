// Flipbook functionality for hero section
class Flipbook {
  constructor() {
    this.images = [];
    this.currentIndex = 0;
    this.flipbookImage = document.getElementById('flipbook-image');
    this.intervalId = null;
    
    this.loadImages();
  }

  async loadImages() {
    // Load images from legacy/01_BXYZ_AH_IMG_TEST directory
    const imageFiles = [
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_1.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_10.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_11.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_12.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_13.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_14.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_15.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_16.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_17.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_18.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_19.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_2.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_20.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_21.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_22.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_23.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_24.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_25.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_26.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_27.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_28.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_29.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_3.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_4.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_5.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_6.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_7.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_8.jpg',
      'legacy/01_BXYZ_AH_IMG_TEST/01_BXYZ_AH_FLASH_TEST_9.jpg'
    ];

    // Preload images
    for (const imagePath of imageFiles) {
      try {
        const img = new Image();
        img.src = imagePath;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
        this.images.push(imagePath);
      } catch (error) {
        console.warn(`Failed to load image: ${imagePath}`);
      }
    }

    if (this.images.length > 0) {
      this.start();
    }
  }

  start() {
    if (this.images.length === 0) return;
    
    // Set initial image
    this.flipbookImage.src = this.images[0];
    
    // Start flipbook animation
    this.intervalId = setInterval(() => {
      this.nextFrame();
    }, 150); // Change frame every 150ms for smooth animation
  }

  nextFrame() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.flipbookImage.src = this.images[this.currentIndex];
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

// Initialize flipbook when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Flipbook();
});
