import express from 'express';
const app = express();
const port = 3000;

import github from './controllers/github.js';

app.get('/', github.getPackageJson);

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
