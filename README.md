# Portfolio Website with Backend

A full-stack portfolio website with a Node.js/Express backend and MongoDB database.

## Features

- **Dynamic Homepage**: An engaging intro section with smooth animations and professional introduction
- **Projects Section**: Dynamically loads projects from MongoDB database
- **Education Timeline**: Highlights academic and professional milestones
- **Contact Form**: Form submission with backend validation and database storage
- **Backend API**: RESTful API for managing projects and contact submissions

## Technologies Used

### Frontend
- HTML5 for structure and content
- CSS3 for styling, animations, and responsive design
- JavaScript for interactivity and dynamic features
- Boxicons for stylish icons used throughout the site

### Backend
- Node.js and Express.js for the server
- MongoDB for the database
- Mongoose for object modeling and database queries
- Zod for schema validation
- Dotenv for environment variable management
- CORS for cross-origin resource sharing

## Setup Instructions

1. **Prerequisites**
   - Node.js (v14+ recommended)
   - MongoDB installed locally or MongoDB Atlas account

2. **Installation**
   ```bash
   # Clone the repository
   git clone <repository-url>
   cd PRODIGY_WD_04

   # Install dependencies
   npm install
   ```

3. **Configuration**
   - Create or modify the `.env` file with your configurations:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   ```

4. **Database Seeding**
   - Seed the database with initial project data:
   ```bash
   npm run seed
   ```

5. **Running the Application**
   - Development mode:
   ```bash
   npm run dev
   ```
   - Production mode:
   ```bash
   npm start
   ```

6. **Access the Application**
   - Frontend: Open your browser and go to `http://localhost:3000`
   - API Endpoints:
     - Projects: `http://localhost:3000/api/projects`
     - Contact: `http://localhost:3000/api/contact`

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a single project by ID
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions (admin use)
