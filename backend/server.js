const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/database');
const app = express();

dotenv.config();

// Middleware
// In your backend/server.js
app.use(cors({
  origin: ['https://your-vercel-domain.vercel.app', 'https://prodigy-wd-04-ashy.vercel.app']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

connectDB().then(() => {
  console.log('MongoDB connected successfully');
  
  const contactRoutes = require('./routes/contactRoutes');
  const projectRoutes = require('./routes/projectRoutes');
  
  app.use('/api/contact', contactRoutes);
  app.use('/api/projects', projectRoutes);
  
  app.use(express.static(path.join(__dirname, '../frontend')));
  
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
}); 