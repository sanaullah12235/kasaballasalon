# 🚀 Quick Start Guide - Kasa Bella Hair Salon & Spa

## Option 1: Local Development (Recommended)

### Prerequisites
- Node.js v16+ installed
- MongoDB installed locally OR MongoDB Atlas account

### Step 1: Install Dependencies

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Step 2: Setup Environment Variables

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/kasabella
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

**Note:** If using MongoDB Atlas, replace `MONGODB_URI` with your connection string:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kasabella?retryWrites=true&w=majority
```

### Step 3: Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

Backend will start on `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Frontend will start on `http://localhost:3000`

### Step 4: Open in Browser

Visit `http://localhost:3000` to see the website!

---

## Option 2: Docker Deployment

### Prerequisites
- Docker and Docker Compose installed

### Run with Docker

```bash
docker-compose up --build
```

This will start:
- Frontend on `http://localhost:3000`
- Backend on `http://localhost:5000`
- MongoDB on `localhost:27017`

### Stop Docker

```bash
docker-compose down
```

---

## Option 3: Production Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Set build command: `cd frontend && npm run build`
5. Set output directory: `frontend/dist`
6. Deploy!

### Backend (Render)

1. Go to [Render](https://render.com)
2. Create new Web Service
3. Connect your repository
4. Set root directory: `backend`
5. Set build command: `npm install`
6. Set start command: `npm start`
7. Add environment variables:
   - `MONGODB_URI` (MongoDB Atlas connection)
   - `NODE_ENV=production`
   - `FRONTEND_URL` (your Vercel URL)
8. Deploy!

### Database (MongoDB Atlas)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier available)
3. Create a database user
4. Whitelist all IPs (0.0.0.0/0) for development
5. Get connection string and update `MONGODB_URI` in backend

---

## 📝 Available Scripts

### Frontend

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend

```bash
npm start            # Start production server
npm run dev          # Start development server with auto-reload
```

---

## 🧪 Testing the Application

### Test Appointment Booking

1. Navigate to `http://localhost:3000`
2. Click "Book Appointment" or scroll to the appointment form
3. Fill in:
   - Name: "Test User"
   - Phone: "+91 1234567890"
   - Service: Select any service
   - Date: Choose a future date
   - Time: Select a time
4. Click "Book Appointment"
5. You should see a success message!

### Test API Endpoints

```bash
# Health check
curl http://localhost:5000/api/health

# Get services
curl http://localhost:5000/api/services

# Get gallery items
curl http://localhost:5000/api/gallery

# Create appointment
curl -X POST http://localhost:5000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "phone": "+911234567890",
    "service": "Hair Cutting",
    "date": "2026-04-20",
    "time": "14:00"
  }'
```

---

## ❗ Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running (`mongod` command)
- Check your `MONGODB_URI` in `.env`
- For MongoDB Atlas, check IP whitelist and credentials

### Port Already in Use
- Frontend (3000): Change port in `frontend/vite.config.js`
- Backend (5000): Change port in `backend/.env`

### Build Errors
- Delete `node_modules` and run `npm install` again
- Ensure Node.js version is 16 or higher

### CORS Errors
- Ensure backend `FRONTEND_URL` matches your frontend URL
- Check CORS configuration in `backend/server.js`

---

## 📞 Support

For issues or questions:
- Check the main README.md
- Review API documentation
- Inspect browser console for frontend errors
- Check backend terminal for server errors

---

**Enjoy building with Kasa Bella! 💈✨**
