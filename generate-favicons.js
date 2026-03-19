const fs = require('fs');
const path = require('path');

// Using native Node.js with sharp if available, or fallback to simple file copy
try {
  const sharp = require('sharp');
  const sourceImg = path.join(__dirname, 'public', 'clavrr-logo.png');
  
  // Generate 256x256 favicon
  sharp(sourceImg)
    .resize(256, 256, { fit: 'contain', background: { r: 248, g: 245, b: 240, alpha: 1 } })
    .png()
    .toFile(path.join(__dirname, 'public', 'favicon.png'))
    .then(() => console.log('✓ favicon.png created (256x256)'))
    .catch(err => console.error('Error creating favicon.png:', err));

  // Generate 32x32 favicon.ico compatible PNG
  sharp(sourceImg)
    .resize(32, 32, { fit: 'contain', background: { r: 248, g: 245, b: 240, alpha: 1 } })
    .png()
    .toFile(path.join(__dirname, 'public', 'favicon-32x32.png'))
    .then(() => console.log('✓ favicon-32x32.png created'))
    .catch(err => console.error('Error creating favicon-32x32.png:', err));

  // Generate 16x16
  sharp(sourceImg)
    .resize(16, 16, { fit: 'contain', background: { r: 248, g: 245, b: 240, alpha: 1 } })
    .png()
    .toFile(path.join(__dirname, 'public', 'favicon-16x16.png'))
    .then(() => console.log('✓ favicon-16x16.png created'))
    .catch(err => console.error('Error creating favicon-16x16.png:', err));

} catch (err) {
  console.error('Sharp not available, please run: npm install sharp');
}
