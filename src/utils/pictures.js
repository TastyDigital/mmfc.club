// Node.js script using ES Modules
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dirPath = path.join(__dirname, '../../public/pics'); // adjust the path as needed
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];

const images = fs.readdirSync(dirPath)
  .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
  .map(file => ({ src: `/pics/${file}` }));

export default images;
