import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, 'assets', 'pictures', filename);
  
  // Create pictures directory if it doesn't exist
  const picturesDir = path.join(__dirname, 'assets', 'pictures');
  if (!fs.existsSync(picturesDir)) {
    fs.mkdirSync(picturesDir, { recursive: true });
  }

  const file = fs.createWriteStream(filepath);

  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filepath);
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

// Download cartoon character images
const cartoonImages = [
  {
    url: 'https://images.unsplash.com/photo-1620428268482-cf1851a36764?w=800&auto=format&fit=crop&q=60',
    filename: 'team1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1620428268482-cf1851a36764?w=800&auto=format&fit=crop&q=60',
    filename: 'team2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1620428268482-cf1851a36764?w=800&auto=format&fit=crop&q=60',
    filename: 'team3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1620428268482-cf1851a36764?w=800&auto=format&fit=crop&q=60',
    filename: 'team4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1620428268482-cf1851a36764?w=800&auto=format&fit=crop&q=60',
    filename: 'team5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1620428268482-cf1851a36764?w=800&auto=format&fit=crop&q=60',
    filename: 'team6.jpg'
  }
];

// Download each cartoon image
cartoonImages.forEach(image => {
  downloadImage(image.url, image.filename);
});
