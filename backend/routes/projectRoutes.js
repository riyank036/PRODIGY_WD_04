const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/projectController');
const validate = require('../middleware/validate');
const projectSchema = require('../validators/projectValidator');

router.get('/', getProjects);

router.get('/:id', getProjectById);

router.post('/', validate(projectSchema), createProject);

router.put('/:id', validate(projectSchema), updateProject);

router.delete('/:id', deleteProject);

module.exports = router; 