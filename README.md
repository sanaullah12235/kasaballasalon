# Kasa Bella Hair Salon & Spa

A modern, premium, fully responsive website for a Hair Salon & Spa brand.

## 🚀 Features

- **Modern UI/UX**: Luxury, modern, minimal salon aesthetic with black, white, gold/orange accents
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations including fade-in on scroll, slide animations, hover effects
- **Dark Theme**: Premium dark mode by default
- **SEO Optimized**: Semantic HTML, meta tags, Open Graph tags
- **Backend API**: Node.js + Express + MongoDB for appointment booking
- **Performance**: Lazy loading, image optimization, fast loading

## 📋 Sections

1. **Hero Section** - Full-width background with gradient overlay and CTA buttons
2. **About Section** - Two-column layout with animated counters
3. **Services Section** - Grid layout with hover animation cards
4. **Gallery Section** - Masonry grid layout with hover overlays
5. **Appointment Form** - Booking form with validation and MongoDB integration
6. **Team Section** - Barber profiles with flip animations
7. **Testimonials** - Client reviews with star ratings
8. **Blog Section** - SEO-friendly blog cards
9. **Footer** - Contact info, social links, newsletter subscription

## 🛠️ Tech Stack

### Frontend
- **React.js** with Vite
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for routing
- **Axios** for API calls
- **React Icons** for icons

### Backend
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **Express Validator** for validation
- **Helmet** for security
- **Rate Limiting** for API protection

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory (copy from `.env.example`):

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/kasabella
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

Start the backend server:

```bash
npm run dev
```

The backend will run on `http://localhost:5000`

## 🌐 API Endpoints

### Appointments
- `POST /api/appointments` - Create a new appointment
- `GET /api/appointments` - Get all appointments
- `GET /api/appointments/:id` - Get appointment by ID
- `PATCH /api/appointments/:id` - Update appointment status
- `DELETE /api/appointments/:id` - Delete appointment

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID

### Gallery
- `GET /api/gallery` - Get all gallery items
- `GET /api/gallery?type=Hair Cutting` - Filter by type
- `GET /api/gallery/:id` - Get gallery item by ID

### Health Check
- `GET /api/health` - API health status

## 🎨 Color Palette

- **Gold**: `#D4A532` (Primary accent)
- **Dark 100**: `#2A2A2A`
- **Dark 200**: `#1E1E1E`
- **Dark 300**: `#141414`
- **Dark 400**: `#0A0A0A` (Background)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Frontend (Vercel)

```bash
cd frontend
npm run build
```

Deploy the `frontend/dist` folder to Vercel.

### Backend (Render/Railway)

1. Push code to GitHub
2. Connect repository to Render/Railway
3. Set environment variables:
   - `MONGODB_URI` (MongoDB Atlas connection string)
   - `NODE_ENV=production`
   - `FRONTEND_URL` (your deployed frontend URL)

### Database (MongoDB Atlas)

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get connection string
4. Update `MONGODB_URI` in your backend environment variables

## 📂 Project Structure

```
salon/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── Footer/
│   │   │   ├── Loading/
│   │   │   ├── WhatsAppButton/
│   │   │   ├── BackToTop/
│   │   │   ├── SectionTitle/
│   │   │   ├── ServiceCard/
│   │   │   ├── GalleryItem/
│   │   │   ├── TeamCard/
│   │   │   ├── TestimonialCard/
│   │   │   ├── BlogCard/
│   │   │   └── Counter/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Team.jsx
│   │   │   ├── Blog.jsx
│   │   │   └── Contact.jsx
│   │   ├── data/
│   │   │   └── data.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── backend/
    ├── config/
    │   └── db.js
    ├── models/
    │   └── Appointment.js
    ├── routes/
    │   ├── appointmentRoutes.js
    │   ├── serviceRoutes.js
    │   └── galleryRoutes.js
    ├── middleware/
    │   └── validation.js
    ├── server.js
    └── package.json
```

## ✨ Extra Features

- ✅ WhatsApp floating button
- ✅ Back to top button
- ✅ Loading spinner on startup
- ✅ Smooth scrolling
- ✅ Sticky navbar with transparency
- ✅ Mobile hamburger menu
- ✅ Form validation
- ✅ Rate limiting on API
- ✅ Security headers with Helmet
- ✅ CORS configuration
- ✅ Morgan logging

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 👨‍💻 Developer

Built with ❤️ for Kasa Bella Hair Salon & Spa
"# kasaballasalon" 
