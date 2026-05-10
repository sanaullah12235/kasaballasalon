import { body, validationResult } from 'express-validator'

export const validateAppointment = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^[+]?[\d\s-()]+$/)
    .withMessage('Please enter a valid phone number'),
  
  body('service')
    .trim()
    .notEmpty()
    .withMessage('Service is required'),
  
  body('date')
    .trim()
    .notEmpty()
    .withMessage('Date is required')
    .isISO8601()
    .withMessage('Please enter a valid date'),
  
  body('time')
    .trim()
    .notEmpty()
    .withMessage('Time is required')
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .withMessage('Please enter a valid time (HH:MM format)'),
  
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array().map(err => ({
          field: err.path,
          message: err.msg,
        })),
      })
    }
    next()
  },
]
