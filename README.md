# 🚀 GrowthProAI Business Dashboard

A Mini Local Business Dashboard that simulates how small businesses might view their SEO content and Google Business data. Built with React, Tailwind CSS, Node.js, and Express.

## ✨ Features

- **📝 Business Information Form** - Enter business name and location
- **⭐ Google Business Simulation** - Displays simulated ratings and reviews
- **🤖 AI-Generated SEO Headlines** - Dynamic headline generation
- **🔄 Headline Regeneration** - Get fresh SEO headlines with one click
- **📱 Responsive Design** - Works perfectly on desktop and mobile
- **🎨 Modern UI/UX** - Glass morphism design with smooth animations
- **⚡ Loading States** - Beautiful loading spinners for better UX
- **✅ Form Validation** - Client-side validation with error handling

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Custom Components** for modular design
- **Fetch API** for HTTP requests

### Backend
- **Node.js** with Express
- **CORS** for cross-origin requests
- **RESTful API** design
- **Simulated Data** (no database required)

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd growthpro-business-dashboard
   ```

2. **Install dependencies**
   ```bash
   # Install main dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Start the application**
   ```bash
   # From the root directory
   npm run dev
   ```
   
   This will start both the backend server (port 5001) and frontend development server (port 3000).

   **Alternative: Start individually**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Frontend
   cd frontend
   npm start
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5001

## 📡 API Endpoints

### POST /business-data
**Description**: Get business data with rating, reviews, and SEO headline

**Request Body**:
```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```

**Response**:
```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```

### GET /regenerate-headline
**Description**: Generate a new SEO headline for the business

**Query Parameters**:
- `name`: Business name
- `location`: Business location

**Example**: `/regenerate-headline?name=Cake%20%26%20Co&location=Mumbai`

**Response**:
```json
{
  "headline": "Discover Cake & Co: Mumbai's Rising Star Business"
}
```

## 🎨 Design Features

- **Glass Morphism UI** - Modern translucent design
- **Gradient Backgrounds** - Beautiful color transitions
- **Responsive Layout** - Mobile-first design approach
- **Interactive Elements** - Hover effects and smooth transitions
- **Loading States** - Elegant loading indicators
- **Error Handling** - User-friendly error messages

## 📱 Screenshots

### Business Form
![Business Form](screenshots/form.png)

### Business Dashboard
![Business Dashboard](screenshots/dashboard.png)

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the frontend directory:
```env
REACT_APP_API_URL=http://localhost:5001
```

### Backend Port
The backend server runs on port 5001 by default. You can change this by setting the `PORT` environment variable.

## 📦 Build for Production

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
```

## 🚀 Deployment

### Backend Deployment (Render/Railway)
1. Push your code to GitHub
2. Connect your repository to Render/Railway
3. Set the root directory to `backend`
4. Deploy with `npm start`

### Frontend Deployment (Vercel/Netlify)
1. Build the frontend: `cd frontend && npm run build`
2. Deploy the `build` folder to Vercel/Netlify
3. Set the API URL environment variable to your deployed backend URL

## 🧪 Testing

### Manual Testing
1. Start both servers
2. Navigate to http://localhost:3000
3. Enter a business name and location
4. Verify the business data displays correctly
5. Test the "Regenerate SEO Headline" button
6. Test form validation with empty fields

### API Testing
Use curl or Postman to test the API endpoints:

```bash
# Test business data endpoint
curl -X POST http://localhost:5001/business-data \
  -H "Content-Type: application/json" \
  -d '{"name": "Test Business", "location": "Test City"}'

# Test headline regeneration
curl "http://localhost:5001/regenerate-headline?name=Test%20Business&location=Test%20City"
```

## 🎯 Assignment Requirements Checklist

- ✅ **Frontend (React + Tailwind CSS)**
  - ✅ Input form with Business Name and Location
  - ✅ Display card with Google Rating, Reviews, and SEO Headline
  - ✅ "Regenerate SEO Headline" button
  - ✅ Clean, mobile-friendly UI

- ✅ **Backend (Node.js + Express)**
  - ✅ POST /business-data endpoint
  - ✅ GET /regenerate-headline endpoint
  - ✅ Simulated data (no database required)

- ✅ **Bonus Features**
  - ✅ Loading spinners and transitions
  - ✅ Form validation
  - ✅ Responsive design
  - ✅ Error handling
  - ✅ Modern UI/UX

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Your Name**
- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

---

**Note**: This is a demo application with simulated data for educational purposes. The ratings, reviews, and business data are randomly generated and not connected to real Google Business profiles. 