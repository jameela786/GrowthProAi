const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data for simulating business ratings and reviews
const getRandomRating = () => {
  return Math.round((Math.random() * 2 + 3) * 10) / 10; // Rating between 3.0 and 5.0
};

const getRandomReviews = () => {
  return Math.floor(Math.random() * 500) + 50; // Reviews between 50 and 550
};

// AI-style headline templates
const headlineTemplates = [
  "Why {name} is {location}'s Best Kept Secret in 2025",
  "Discover {name}: {location}'s Rising Star Business",
  "{name} - The {location} Gem Everyone's Talking About",
  "How {name} is Revolutionizing {location}'s Business Scene",
  "{name}: Your New Favorite Spot in {location}",
  "The Ultimate Guide to {name} in {location}",
  "{name} - Where {location} Meets Excellence",
  "Why {name} is Taking {location} by Storm",
  "Unlock the Magic of {name} in {location}",
  "{name}: The {location} Business That's Changing Everything"
];

// Helper function to generate headline
const generateHeadline = (name, location) => {
  const template = headlineTemplates[Math.floor(Math.random() * headlineTemplates.length)];
  return template.replace(/{name}/g, name).replace(/{location}/g, location);
};

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'GrowthProAI Business Dashboard API',
    version: '1.0.0',
    endpoints: {
      'POST /business-data': 'Get business data with name and location',
      'GET /regenerate-headline': 'Get a new AI-generated headline'
    }
  });
});

// POST /business-data - Accept business name and location, return simulated data
app.post('/business-data', (req, res) => {
  try {
    const { name, location } = req.body;
    
    // Validate input
    if (!name || !location) {
      return res.status(400).json({ 
        error: 'Business name and location are required' 
      });
    }

    // Simulate processing delay
    setTimeout(() => {
      const businessData = {
        rating: getRandomRating(),
        reviews: getRandomReviews(),
        headline: generateHeadline(name, location)
      };
      
      res.json(businessData);
    }, 1000); // 1 second delay to simulate API processing

  } catch (error) {
    console.error('Error in /business-data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /regenerate-headline - Return a fresh AI-style headline
app.get('/regenerate-headline', (req, res) => {
  try {
    const { name, location } = req.query;
    
    // Validate input
    if (!name || !location) {
      return res.status(400).json({ 
        error: 'Business name and location are required as query parameters' 
      });
    }

    // Simulate processing delay
    setTimeout(() => {
      const newHeadline = generateHeadline(name, location);
      res.json({ headline: newHeadline });
    }, 800); // Slightly faster for regeneration

  } catch (error) {
    console.error('Error in /regenerate-headline:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Business Dashboard API ready!`);
}); 