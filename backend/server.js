import express from 'express';
import cors from 'cors';
import { events, calendars } from './data/index.js';

const app = express();

app.use(cors());

app.get('/api', (_, res) => {
  res.send('Hello World');
});

app.get('/api/events', (_, res) => {
  res.json(events);
});

app.get('/api/calendars', (_, res) => {
  res.json(calendars);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
