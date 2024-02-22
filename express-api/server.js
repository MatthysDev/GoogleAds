const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Point de terminaison pour créer un article
app.post('/api/articles', (req, res) => {
  const { title, description } = req.body; // Extraction de titre et description du corps de la requête
  // Ici, vous pourriez ajouter le code pour sauvegarder ces données dans une base de données
  console.log('Article reçu:', { title, description }); // Afficher dans la console pour le débogage
  res.status(201).send({ message: 'Article créé avec succès', article: { title, description } });
});

// GET endpoint to retrieve all articles
app.get('/api/articles', (req, res) => {
  // Ici, vous pourriez ajouter le code pour récupérer les articles depuis une base de données
  const articles = [
    { title: 'Premier article', description: 'Description du premier article' },
    { title: 'Deuxième article', description: 'Description du deuxième article' },
  ];
  res.status(200).send(articles);
});

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
