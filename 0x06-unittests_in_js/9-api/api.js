const express = require('express');
const app = express();
const port = 7865;

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint for '/'
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// GET endpoint for '/cart/:id'
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
