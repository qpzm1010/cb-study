const express = require('express');
const app = express();
const port = 3000;

app.get('/health', (req, res) => {
  res.status(200).json({'status': 'hanbom'});
});

app.get('/time', (req, res) => {
    const now = new Date();
    res.json({ time: now.toISOString() });
  });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
