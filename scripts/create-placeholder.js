const fs = require('fs');
const path = require('path');

// Create a simple SVG
function createSVG(text, color) {
  return `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${color}"/>
    <text x="50%" y="50%" font-size="24" text-anchor="middle" alignment-baseline="middle" fill="white">${text}</text>
  </svg>`;
}

// Create the public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Create hero image
fs.writeFileSync(
  path.join(publicDir, 'hydraulic-press-hero.svg'),
  createSVG('Hydraulic Press Hero', '#444')
);

// Create slider images
for (let i = 1; i <= 5; i++) {
  fs.writeFileSync(
    path.join(publicDir, `hydraulic-press-${i}.svg`),
    createSVG(`Hydraulic Press ${i}`, `#${(i + 5).toString(16).repeat(3)}`)
  );
}
