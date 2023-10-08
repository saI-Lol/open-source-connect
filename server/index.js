const express = require('express');
const fetch = require('node-fetch');
const cors=require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(express.json());
// app.use(cors({origin:"http://localhost:3000/"}))

app.get('/api/data', async (req, res) => {
  try {
    const response = await fetch('https://www.citizenscience.gov/feed.json'); // Replace with your external API URL
    console.log(response)
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
