const { z } = require('zod');

const contactSchema = z.object({
  fullName: z.string()
    .min(2, { message: 'Full name must be at least 2 characters long' })
    .max(100, { message: 'Full name must be less than 100 characters' })
    .trim(),
  
  email: z.string()
    .email({ message: 'Invalid email address' })
    .toLowerCase()
    .trim(),
  
  phoneNumber: z.string()
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .max(12, { message: 'Phone number must be less than 12 digits' })
    .trim(),
  
  subject: z.string()
    .min(2, { message: 'Subject must be at least 2 characters long' })
    .max(100, { message: 'Subject must be less than 100 characters' })
    .trim(),
  
  message: z.string()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .max(1000, { message: 'Message must be less than 1000 characters' })
    .trim()
});

module.exports = contactSchema; 