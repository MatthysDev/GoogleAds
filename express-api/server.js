const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a GET route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define a POST route
app.post('/api/data', (req, res) => {
  const { body } = req;
  res.status(201).send({ message: 'Data received', yourData: body });
});

// Start the server
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
