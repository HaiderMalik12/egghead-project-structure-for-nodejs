import express from 'express';
import { restRouter } from './api';

const app = express();
const PORT = 3000;

app.use('/api', restRouter);
app.get('/', (req, res) => {
  res.json({
    msg: 'Nodejs project Structure',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
