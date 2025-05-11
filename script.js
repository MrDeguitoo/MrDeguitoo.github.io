// Initialize date
document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const dateElement = document.getElementById('current-date');
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString('es-ES', options);
    
    // Add initial sunflowers with delay
    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          addSunflower();
        }, i * 300);
      }
    }, 400);
    
    // Add event listeners
    document.getElementById('add-sunflower').addEventListener('click', addSunflower);
    document.getElementById('add-many-sunflowers').addEventListener('click', addManySunflowers);
  });
  
  // Function to create a sunflower
  function createSunflower() {
    const sunflower = document.createElement('div');
    sunflower.className = 'sunflower';
    
    // Create stem and leaves
    const stem = document.createElement('div');
    stem.className = 'stem';
    
    const leaf1 = document.createElement('div');
    leaf1.className = 'leaf';
    
    const leaf2 = document.createElement('div');
    leaf2.className = 'leaf';
    
    stem.appendChild(leaf1);
    stem.appendChild(leaf2);
    
    // Create petals
    const petals = document.createElement('div');
    petals.className = 'petals';
    
    // Add multiple petals around the center
    const petalCount = 12;
    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      
      // Position petals in a circle
      const angle = (i / petalCount) * 360;
      petal.style.transform = `rotate(${angle}deg) translateY(-30px)`;
      
      // Add slight color variation to petals
      const hue = 45 + Math.random() * 10; // Yellow range
      const lightness = 50 + Math.random() * 15;
      petal.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
      
      petals.appendChild(petal);
    }
    
    // Create center of flower
    const center = document.createElement('div');
    center.className = 'center';
    
    // Add all parts to the sunflower
    sunflower.appendChild(stem);
    sunflower.appendChild(petals);
    sunflower.appendChild(center);
    
    return sunflower;
  }
  
  // Function to add a single sunflower
  function addSunflower() {
    const container = document.getElementById('sunflower-container');
    const sunflower = createSunflower();
    
    // Position the sunflower randomly along the edges
    const positionType = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
    
    // Set random position
    let posX, posY;
    
    switch (positionType) {
      case 0: // Top
        posX = Math.random() * 100;
        posY = Math.random() * 30;
        break;
      case 1: // Right
        posX = 70 + Math.random() * 30;
        posY = Math.random() * 100;
        break;
      case 2: // Bottom
        posX = Math.random() * 100;
        posY = 70 + Math.random() * 30;
        break;
      case 3: // Left
        posX = Math.random() * 30;
        posY = Math.random() * 100;
        break;
    }
    
    // Set random size variation
    const scale = 0.6 + Math.random() * 0.5;
    
    // Apply positions and transformations
    sunflower.style.left = `${posX}%`;
    sunflower.style.top = `${posY}%`;
    sunflower.style.transform = `scale(${scale}) rotate(${Math.random() * 20 - 10}deg)`;
    
    // Add to container
    container.appendChild(sunflower);
    
    // Add bloom animation
    setTimeout(() => {
      sunflower.classList.add('bloom');
    }, 10);
    
    return sunflower;
  }
  
  // Function to add multiple sunflowers
  function addManySunflowers() {
    const count = 25; // Increased number of sunflowers
    let delay = 0;
    
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const sunflower = addSunflower();
        
        // Add extra animation for shower effect
        sunflower.style.animation = `bloom 1.5s forwards, float 20s infinite ease-in-out`;
        sunflower.style.animationDelay = `0s, 1.5s`;
      }, delay);
      
      delay += 150; // Reduced delay between appearances
    }
  }