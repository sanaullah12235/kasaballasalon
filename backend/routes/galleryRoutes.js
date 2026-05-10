import express from 'express'

const router = express.Router()

// Mock gallery data (in production, this would come from a database or CMS)
const galleryItems = [
  { id: 1, image: 'https://images.unsplash.com/photo-1585747860715-2ba36e164f52?w=600', title: 'Premium Hair Cut', type: 'Hair Styling' },
  { id: 2, image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600', title: 'Modern Fade', type: 'Hair Cutting' },
  { id: 3, image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600', title: 'Beard Grooming', type: 'Shaving' },
  { id: 4, image: 'https://images.unsplash.com/photo-1560066984-138dadb5c4b2?w=600', title: 'Spa Treatment', type: 'Wellness' },
  { id: 5, image: 'https://images.unsplash.com/photo-1521590832167-7731536d1f18?w=600', title: 'Hair Coloring', type: 'Color' },
  { id: 6, image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600', title: 'Classic Cut', type: 'Hair Cutting' },
  { id: 7, image: 'https://images.unsplash.com/photo-1599351436254-198b454e748c?w=600', title: 'Hot Towel Shave', type: 'Shaving' },
  { id: 8, image: 'https://images.unsplash.com/photo-1519415510989-58c05d379d10?w=600', title: 'Hair Styling', type: 'Styling' },
  { id: 9, image: 'https://images.unsplash.com/photo-1605497788044-5a3593151c53?w=600', title: 'Luxury Facial', type: 'Skin Care' },
  { id: 10, image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600', title: 'Hair Design', type: 'Creative' },
  { id: 11, image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600', title: 'Body Massage', type: 'Spa' },
  { id: 12, image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=600', title: 'Premium Service', type: 'Grooming' },
]

// Get All Gallery Items
router.get('/', (req, res) => {
  const { type } = req.query
  
  let filteredItems = galleryItems
  if (type && type !== 'All') {
    filteredItems = galleryItems.filter(item => item.type === type)
  }

  res.json({
    success: true,
    count: filteredItems.length,
    data: filteredItems,
  })
})

// Get Gallery Item by ID
router.get('/:id', (req, res) => {
  const item = galleryItems.find(item => item.id === parseInt(req.params.id))

  if (!item) {
    return res.status(404).json({
      success: false,
      message: 'Gallery item not found',
    })
  }

  res.json({
    success: true,
    data: item,
  })
})

export default router
