import express from 'express'
import Appointment from '../models/Appointment.js'
import { validateAppointment } from '../middleware/validation.js'

const router = express.Router()

// Create Appointment
router.post('/', validateAppointment, async (req, res) => {
  try {
    const { name, phone, service, date, time } = req.body

    const appointment = new Appointment({
      name,
      phone,
      service,
      date,
      time,
    })

    await appointment.save()

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully',
      data: appointment,
    })
  } catch (error) {
    console.error('Error creating appointment:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to book appointment',
      error: error.message,
    })
  }
})

// Get All Appointments (Admin)
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .sort({ createdAt: -1 })
      .limit(50)

    res.json({
      success: true,
      count: appointments.length,
      data: appointments,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch appointments',
      error: error.message,
    })
  }
})

// Get Appointment by ID
router.get('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found',
      })
    }

    res.json({
      success: true,
      data: appointment,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch appointment',
      error: error.message,
    })
  }
})

// Update Appointment Status
router.patch('/:id', async (req, res) => {
  try {
    const { status } = req.body

    if (!['pending', 'confirmed', 'cancelled', 'completed'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status',
      })
    }

    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    )

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found',
      })
    }

    res.json({
      success: true,
      message: 'Appointment updated successfully',
      data: appointment,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update appointment',
      error: error.message,
    })
  }
})

// Delete Appointment
router.delete('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id)

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found',
      })
    }

    res.json({
      success: true,
      message: 'Appointment deleted successfully',
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete appointment',
      error: error.message,
    })
  }
})

export default router
