// Import Express.js
const express = require('express');

// Create an Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Set port
const port = process.env.PORT || 8000;


app.get('/', (req, res) => {
  res.send('MIM whatsapp API webhook.')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

app.listen(port, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})
