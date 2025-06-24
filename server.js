import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';
import consultRoutes from './routes/consultRoutes.js';
import batteryRoutes from './routes/batteryRoutes.js';
// load environment variables
dotenv.config();
connectDB();
// init app
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);
app.use('/consults', consultRoutes);
app.use('/battery', batteryRoutes);

app.get('/', (req, res) => {
  res.send('WELCOME TO DEC-TECH');
});

//define your ports
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is up and running at ${PORT}`));
