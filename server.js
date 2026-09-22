import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js'

import cookieParser from 'cookie-parser'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'src')));

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

if (process.env.NODE_ENV !== 'production') {
    app.listen(3000, () => console.log('Server is alive on port 3000'));
  }

  export {app};