/**
 * API client for interacting with the backend
 */
const API_URL = 'http://localhost:3000/api';

/**
 * Fetch all projects from the API
 * @returns {Promise<Array>} - Array of project objects
 */
async function getProjects() {
  try {
    const response = await fetch(`${API_URL}/projects`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

/**
 * Get a single project by ID
 * @param {string} id - The project ID
 * @returns {Promise<Object>} - Project object
 */
async function getProjectById(id) {
  try {
    const response = await fetch(`${API_URL}/projects/${id}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch project: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching project ${id}:`, error);
    return null;
  }
}

/**
 * Submit contact form data
 * @param {Object} formData - Contact form data
 * @returns {Promise<Object>} - Response data
 */
async function submitContactForm(formData) {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors?.[0]?.message || 'Failed to submit contact form');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
} 