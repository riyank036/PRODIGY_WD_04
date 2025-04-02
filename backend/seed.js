require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const connectDB = require('./config/database');

// Sample project data
const projects = [
  {
    title: 'Digital Clock',
    description: 'A real-time digital clock built with JavaScript that updates every second, showing current time in a sleek interface.',
    projectUrl: 'https://digital-clock-gray-six.vercel.app/',
    imageUrl: 'https://via.placeholder.com/350x200?text=Digital+Clock',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    featured: true
  },
  {
    title: 'Stopwatch App',
    description: 'Interactive stopwatch application with start, pause, reset, and lap features. Built with vanilla JavaScript and CSS animations.',
    projectUrl: 'https://prodigy-wd-02-kohl.vercel.app/',
    imageUrl: 'https://via.placeholder.com/350x200?text=Stopwatch',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    featured: true
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'Classic two-player Tic-Tac-Toe game with a modern UI. Features include score tracking and game state persistence.',
    projectUrl: 'https://prodigy-wd-03-cyan-zeta.vercel.app/',
    imageUrl: 'https://via.placeholder.com/350x200?text=Tic+Tac+Toe',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    featured: false
  },
  {
    title: 'Weather App',
    description: 'Web application that displays real-time weather data for different cities using a weather API. Features include search functionality and 5-day forecast.',
    projectUrl: 'https://prodigy-wd-05-one-eta.vercel.app/',
    imageUrl: 'https://via.placeholder.com/350x200?text=Weather+App',
    technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
    featured: true
  }
];

// Connect to database and seed data
async function seedDatabase() {
  try {
    await connectDB();
    console.log('Connected to MongoDB for seeding');
    
    // Clear existing projects
    await Project.deleteMany({});
    console.log('Database cleared');

    // Insert new projects
    const createdProjects = await Project.insertMany(projects);
    console.log(`${createdProjects.length} projects inserted`);

    // Close connection
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error(`Error seeding data: ${error.message}`);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase(); 