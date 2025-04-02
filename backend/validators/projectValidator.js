const { z } = require('zod');

const projectSchema = z.object({
  title: z.string()
    .min(2, { message: 'Title must be at least 2 characters long' })
    .max(100, { message: 'Title must be less than 100 characters' })
    .trim(),
  
  description: z.string()
    .min(10, { message: 'Description must be at least 10 characters long' })
    .max(1000, { message: 'Description must be less than 1000 characters' })
    .trim(),
  
  projectUrl: z.string()
    .url({ message: 'Project URL must be a valid URL' })
    .trim(),
  
  imageUrl: z.string()
    .url({ message: 'Image URL must be a valid URL' })
    .trim()
    .optional()
    .default(''),
  
  technologies: z.array(z.string())
    .optional()
    .default([]),
  
  featured: z.boolean()
    .optional()
    .default(false)
});

module.exports = projectSchema; 