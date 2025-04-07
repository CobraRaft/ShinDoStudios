// Parallax effect for the background
const background = document.querySelector('.background-anim');

let mouseX = 0;
let mouseY = 0;

// Update mouse position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Create a parallax effect on background
function moveBackground() {
  const offsetX = (mouseX / window.innerWidth) * 100;
  const offsetY = (mouseY / window.innerHeight) * 100;

  background.style.transform = `translate(-${offsetX}%, -${offsetY}%)`;
}

// Simple particles effect in the background
function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
  particle.style.animationDelay = `${Math.random() * 3}s`;

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 5000); // Remove particle after animation
}

// Generate particles every 200ms
setInterval(createParticle, 200);

// Animate background movement
setInterval(moveBackground, 1000 / 60);
