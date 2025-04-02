const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

app.get('/api/projects', (req, res) => {
  res.json({ 
    success: true, 
    data: [
      {
        id: '1',
        title: 'Test Project',
        description: 'This is a test project',
        projectUrl: 'https://example.com',
        technologies: ['Node.js', 'Express', 'MongoDB']
      }
    ] 
  });
});

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
}); 