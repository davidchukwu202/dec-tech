import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// load environment variables
dotenv.config();
// init app
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('HELLO WELCOME TO DEC-TECH');
});

//define your ports
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is up and running at ${PORT}`));
