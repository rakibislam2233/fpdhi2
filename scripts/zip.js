import archiver from 'archiver';
import { createWriteStream, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = join(__dirname, '..');
const distDir = join(projectRoot, 'dist');
const outputZip = join(projectRoot, 'app.zip');

// Check if dist folder exists
if (!existsSync(distDir)) {
  console.error('ERROR: dist folder not found! Run "npm run build" first.');
  process.exit(1);
}

// Check if manifest.webapp exists
const manifestPath = join(distDir, 'manifest.webapp');
if (!existsSync(manifestPath)) {
  console.error('ERROR: manifest.webapp not found in dist folder!');
  console.error('Make sure public/manifest.webapp exists before building.');
  process.exit(1);
}

console.log('Creating DHIS2 app zip file...');
console.log(`Source: ${distDir}`);
console.log(`Output: ${outputZip}`);

// Create output stream
const output = createWriteStream(outputZip);
const archive = archiver('zip', {
  zlib: { level: 9 } // Maximum compression
});

// Handle events
output.on('close', () => {
  console.log(`\nSuccess! Created app.zip (${(archive.pointer() / 1024).toFixed(2)} KB)`);
  console.log('\nUpload this file to DHIS2: ' + outputZip);
});

archive.on('error', (err) => {
  console.error('Error creating zip:', err);
  process.exit(1);
});

archive.on('warning', (err) => {
  if (err.code === 'ENOENT') {
    console.warn('Warning:', err);
  } else {
    throw err;
  }
});

// Pipe archive to output file
archive.pipe(output);

// Add ALL contents of dist folder to the ROOT of the zip (not inside a folder)
archive.directory(distDir, false);

// Finalize the archive
archive.finalize();
