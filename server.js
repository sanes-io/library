import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: './.env' });
import app from './app.js';

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DB connection successful!'));

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.error('Unhandled rejection! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
