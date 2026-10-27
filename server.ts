import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  // Increase payload limit for raw image uploads
  app.use(express.json({ limit: '30mb' }));
  app.use(express.urlencoded({ extended: true, limit: '30mb' }));

  // API Route: Save technician photo permanently on server filesystem
  app.post('/api/upload-photo', (req, res) => {
    try {
      const { image } = req.body;
      if (!image || typeof image !== 'string') {
        return res.status(400).json({ error: 'No image data provided' });
      }

      // Extract base64 part if it has data URL scheme
      const matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      const buffer = matches ? Buffer.from(matches[2], 'base64') : Buffer.from(image, 'base64');

      const publicDir = path.join(__dirname, 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      // Write to public/technician.png and public/technician.jpg
      const pngPath = path.join(publicDir, 'technician.png');
      const jpgPath = path.join(publicDir, 'technician.jpg');
      const masterFlag = path.join(publicDir, '.master_photo_set');
      fs.writeFileSync(pngPath, buffer);
      fs.writeFileSync(jpgPath, buffer);
      fs.writeFileSync(masterFlag, JSON.stringify({ uploadedAt: Date.now(), size: buffer.length }));

      // Also write directly into src/assets/images
      const assetsDir = path.join(__dirname, 'src', 'assets', 'images');
      if (fs.existsSync(assetsDir)) {
        const assetPath = path.join(assetsDir, 'mobile_chip_technician_exact_1790923108587.jpg');
        fs.writeFileSync(assetPath, buffer);
      }

      // Also write directly into dist if built
      const distDir = path.join(__dirname, 'dist');
      if (fs.existsSync(distDir)) {
        try {
          fs.writeFileSync(path.join(distDir, 'technician.png'), buffer);
          fs.writeFileSync(path.join(distDir, 'technician.jpg'), buffer);
        } catch (e) {
          console.warn('Could not write to dist folder', e);
        }
      }

      const timestamp = Date.now();
      console.log(`[Photo Sync] Master technician photo (${buffer.length} bytes) set permanently on server.`);
      return res.json({ success: true, isMaster: true, timestamp, url: `/technician.png?t=${timestamp}` });
    } catch (err) {
      console.error('[Photo Sync Error] Failed to write photo file:', err);
      return res.status(500).json({ error: 'Failed to write photo file to server' });
    }
  });

  // API Route: Check photo status and timestamp
  app.get('/api/photo-status', (req, res) => {
    const masterFlag = path.join(__dirname, 'public', '.master_photo_set');
    const pngPath = path.join(__dirname, 'public', 'technician.png');
    if (fs.existsSync(masterFlag) && fs.existsSync(pngPath)) {
      const stats = fs.statSync(pngPath);
      return res.json({ isMaster: true, exists: true, mtime: stats.mtimeMs, size: stats.size });
    }
    return res.json({ isMaster: false, exists: false });
  });

  // In production, serve dist folder; in dev, mount vite middlewares
  if (process.env.NODE_ENV === 'production' && fs.existsSync(path.join(__dirname, 'dist'))) {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
        watch: process.env.DISABLE_HMR === 'true' ? null : {},
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
