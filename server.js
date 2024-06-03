import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });
import app from './app.js';

process.on('uncaughtException', (err) => {
  console.log('Unhandled exceptions! 💥 Shutting down server');
  console.log(err.name, err.message);
  process.exit(1);
});

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose
  .connect(DB)
  .then(() => console.log('Connected successfully to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port} ...`);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled rejection! 💥 Shutting down server');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
