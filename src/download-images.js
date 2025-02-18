import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, '..', 'public', 'images', 'team', filename);
  
  // Create team directory if it doesn't exist
  const teamDir = path.join(__dirname, '..', 'public', 'images', 'team');
  if (!fs.existsSync(teamDir)) {
    fs.mkdirSync(teamDir, { recursive: true });
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

// Copy images from provided URLs
const copyImage = (sourcePath, filename) => {
  const targetPath = path.join(__dirname, '..', 'public', 'images', 'team', filename);
  fs.copyFileSync(sourcePath, targetPath);
  console.log(`Copied ${filename}`);
};

// Download team member images
const teamImages = [
  {
    url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60',
    filename: 'einstein.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60',
    filename: 'curie.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60',
    filename: 'tesla.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&auto=format&fit=crop&q=60',
    filename: 'lovelace.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60',
    filename: 'turing.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1573496799515-eebbd0e72185?w=800&auto=format&fit=crop&q=60',
    filename: 'hopper.jpg'
  }
];

// Download each team member image
teamImages.forEach(image => {
  downloadImage(image.url, image.filename);
});

// Copy provided images
const sourceImages = [
  {
    sourcePath: path.join(__dirname, '..', 'public', 'images', 'gokhan.jpg'),
    filename: 'gokhan.jpg'
  },
  {
    sourcePath: path.join(__dirname, '..', 'public', 'images', 'tamer.jpg'),
    filename: 'tamer.jpg'
  }
];

sourceImages.forEach(image => {
  if (fs.existsSync(image.sourcePath)) {
    copyImage(image.sourcePath, image.filename);
  }
});
