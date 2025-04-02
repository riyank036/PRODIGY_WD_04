const Contact = require('../models/Contact');

/**
 * @desc    Submit a new contact form
 * @route   POST /api/contact
 * @access  Public
 */
const submitContactForm = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, subject, message } = req.body;
    
    // Create new contact entry
    const contact = await Contact.create({
      fullName,
      email,
      phoneNumber,
      subject,
      message
    });
    
    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form',
      error: error.message
    });
  }
};

/**
 * @desc    Get all contact form submissions
 * @route   GET /api/contact
 * @access  Private (in a real app, this would be protected)
 */
const getContactSubmissions = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve contact submissions',
      error: error.message
    });
  }
};

module.exports = {
  submitContactForm,
  getContactSubmissions
}; 