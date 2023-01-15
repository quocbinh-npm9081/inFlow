import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import express from 'express';

const app = express();
const port = process.env.PORT;
const mongoDB_URL = process.env.MONGODB_URL;
mongoose.set('strictQuery', false);
mongoose
  .connect(String(mongoDB_URL))
  .then(() => {
    console.log('Connection successfully');
    app.get('/', (req, res) => {
      res.send('Hello App');
    });
    app.listen(port, () => console.log('Server running on port: ', port));
  })
  .catch((err) => console.log(err));
