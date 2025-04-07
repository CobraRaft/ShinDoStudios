// Snowfall effect - create snowflakes
const snowfallContainer = document.createElement('div');
snowfallContainer.classList.add('snowfall');
document.body.appendChild(snowfallContainer);

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  
  // Random size for snowflakes
  const size = Math.random() * 5 + 2;
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;

  // Random initial position
  snowflake.style.left = `${Math.random() * 100}%`;

  // Append snowflake to the container
  snowfallContainer.appendChild(snowflake);

  // Remove snowflake after it falls (to prevent too many elements)
  setTimeout(() => {
    snowflake.remove();
  }, 5000); // Snowflake disappears after 5s
}

// Generate snowflakes every 100ms
setInterval(createSnowflake, 100);
