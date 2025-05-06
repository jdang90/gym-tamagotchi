const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const SPRITE_SIZE = 128;
const SPRITE_DIR = path.join(__dirname, '../public/sprites');

// Create the sprites directory if it doesn't exist
if (!fs.existsSync(SPRITE_DIR)) {
  fs.mkdirSync(SPRITE_DIR, { recursive: true });
}

const characters = [
  { name: 'fox', color: '#FF6B35' },
  { name: 'bear', color: '#4A4E69' },
  { name: 'frog', color: '#2EC4B6' }
];

const emotions = [
  { name: 'neutral', expression: '😐' },
  { name: 'happy', expression: '😊' },
  { name: 'sad', expression: '😢' },
  { name: 'tired', expression: '😴' }
];

characters.forEach(character => {
  emotions.forEach(emotion => {
    const canvas = createCanvas(SPRITE_SIZE, SPRITE_SIZE);
    const ctx = canvas.getContext('2d');

    // Draw background
    ctx.fillStyle = character.color;
    ctx.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);

    // Draw character body
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(SPRITE_SIZE/2, SPRITE_SIZE/2, SPRITE_SIZE/3, 0, Math.PI * 2);
    ctx.fill();

    // Draw expression
    ctx.font = '48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#000000';
    ctx.fillText(emotion.expression, SPRITE_SIZE/2, SPRITE_SIZE/2);

    // Save the image
    const buffer = canvas.toBuffer('image/png');
    const filename = `${character.name}-${emotion.name}.png`;
    fs.writeFileSync(path.join(SPRITE_DIR, filename), buffer);
  });
});

console.log('Placeholder sprites generated successfully!'); 