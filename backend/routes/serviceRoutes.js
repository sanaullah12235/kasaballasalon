import express from 'express'

const router = express.Router()

// Mock services data (in production, this would come from a database)
const services = [
  {
    id: 1,
    icon: '✂️',
    title: 'Hair Cutting',
    description: 'Precision cuts tailored to your face shape and personal style. From classic to contemporary looks.',
    price: '₹500+',
    duration: '45 min',
  },
  {
    id: 2,
    icon: '🪒',
    title: 'Shaving & Grooming',
    description: 'Professional hot towel shaves and beard grooming for the modern gentleman.',
    price: '₹300+',
    duration: '30 min',
  },
  {
    id: 3,
    icon: '✨',
    title: 'Skin Care',
    description: 'Revitalizing facials and skin treatments to give you that healthy, radiant glow.',
    price: '₹800+',
    duration: '60 min',
  },
  {
    id: 4,
    icon: '💆',
    title: 'Spa & Wellness',
    description: 'Relaxing spa treatments to rejuvenate your mind, body, and soul.',
    price: '₹1500+',
    duration: '90 min',
  },
  {
    id: 5,
    icon: '🧖',
    title: 'Body Treatments',
    description: 'Luxurious body scrubs, wraps, and massages for ultimate relaxation.',
    price: '₹2000+',
    duration: '120 min',
  },
  {
    id: 6,
    icon: '💈',
    title: 'Mustache Trim',
    description: 'Expert mustache shaping and trimming to keep your look sharp and refined.',
    price: '₹200+',
    duration: '20 min',
  },
]

// Get All Services
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: services.length,
    data: services,
  })
})

// Get Service by ID
router.get('/:id', (req, res) => {
  const service = services.find(s => s.id === parseInt(req.params.id))

  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Service not found',
    })
  }

  res.json({
    success: true,
    data: service,
  })
})

export default router
