import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, 'dist/project')));

// API Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'Server is running' });
});

// Catch all other routes and return the Angular app
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'dist/project/index.html'));
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

;