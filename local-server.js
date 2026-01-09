import express from 'express';
import dotenv from 'dotenv';
import contactHandler from './api/submit-contact.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3001;

// Vercel serverless functions expect parsed JSON body
app.use(express.json());

// Log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Route to the contact handler
app.all('/api/submit-contact', async (req, res) => {
    try {
        await contactHandler(req, res);
    } catch (error) {
        console.error('API Error:', error);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`
  🚀 Local API Server running at http://localhost:${PORT}
  👉 API Endpoint: http://localhost:${PORT}/api/submit-contact
  `);
});
