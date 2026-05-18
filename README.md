# 🚀 AI Habit Tracker

> **Full-stack MERN habit tracker with AI-powered insights, streaks, and GitHub-style heatmaps**

[![JavaScript](https://img.shields.io/badge/JavaScript-95.4%25-F7DF1E?logo=javascript&logoColor=black)](https://www.javascript.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.5-13AA52?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Google AI](https://img.shields.io/badge/Google_AI-GenAI-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)

---

## ✨ Features

### 🎯 **Core Functionality**
- **Create & Manage Habits** – Build custom habits with categories, frequencies, and descriptions
- **Track Completions** – Log habit completions daily and visualize your consistency
- **Habit Streaks** – Monitor current and longest streaks to stay motivated
- **GitHub-Style Heatmaps** – Beautiful contribution-style visualizations of your activity

### 🤖 **AI-Powered Insights**
- **Weekly Reports** – AI-generated personalized summaries of your weekly progress
- **Smart Habit Suggestions** – Get AI-recommended habits based on your goals and habits
- **Recovery Plans** – Receive tailored strategies to restart broken streaks
- **Morning Motivation** – Daily personalized motivation messages powered by Google Generative AI
- **Interactive AI Chat** – Ask questions about your habit data and get instant analysis

### 📊 **Analytics & Visualization**
- **Performance Metrics** – Track total habits, active streaks, and weekly completion rates
- **Category Breakdown** – Pie charts showing habit distribution across categories
- **Weekly Bar Charts** – Visualize completion patterns by day of the week
- **30-Day Trends** – Monthly trend analysis to identify patterns and progress
- **Habit Statistics** – Detailed per-habit performance metrics

### 🎨 **User Experience**
- **Responsive Design** – Optimized for mobile, tablet, and desktop with Tailwind CSS
- **Light/Dark Mode** – Theme toggle for comfortable usage at any time
- **Smooth Animations** – Delightful orbital animations and confetti celebrations
- **Drag & Drop** – Reorder habits with intuitive drag-and-drop functionality
- **Auth Protected** – Secure JWT-based authentication and user sessions

---

 ## 🛠️ Tech Stack

### **Frontend**
- **React 19** – Latest React with modern hooks and component patterns
- **Vite** – Lightning-fast build tool and dev server
- **Tailwind CSS 4** – Utility-first styling framework
- **Recharts** – Elegant charting library for data visualization
- **React Router v6** – Client-side routing
- **@dnd-kit** – Modern drag-and-drop solution
- **Lucide React** – Beautiful icon library
- **Canvas Confetti** – Celebration animations

### **Backend**
- **Node.js + Express** – Fast and scalable REST API
- **MongoDB + Mongoose** – NoSQL database with schema validation
- **Google Generative AI** – AI-powered features and insights
- **JWT** – Secure user authentication
- **bcryptjs** – Password hashing and security

### **Database**
- **MongoDB** – Document-based database for flexibility and scalability

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v16+)
- MongoDB (local or Atlas)
- Google Generative AI API Key

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/varsha-1428/AIHabitTracker.git
   cd AIHabitTracker
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   
   # Create .env file
   cat > .env << EOF
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GOOGLE_API_KEY=your_google_generative_ai_key
   CLIENT_URL=http://localhost:5173
   EOF
   
   # Run development server
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   
   # Create .env.local file
   cat > .env.local << EOF
   VITE_BASE_URL=http://localhost:8000/api
   EOF
   
   # Run development server
   npm run dev
   ```

4. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:8000/api`

---

## 📋 Project Structure

```
AIHabitTracker/
├── frontend/                    # React + Vite frontend
│   ├── src/
│   │   ├── pages/              # Page components (Dashboard, Habits, Stats, etc.)
│   │   ├── components/         # Reusable UI components
│   │   ├── context/            # AuthContext, ThemeContext
│   │   ├── api/                # Axios configuration and API calls
│   │   ├── utils/              # Constants and utility functions
│   │   └── App.jsx             # Main app router
│   └── package.json
│
├── backend/                     # Express + MongoDB backend
│   ├── routes/                 # API route definitions
│   │   ├── auth.js             # Authentication endpoints
│   │   ├── habits.js           # Habit management
│   │   ├── logs.js             # Habit completion logs
│   │   └── ai.js               # AI-powered endpoints
│   ├── controllers/            # Business logic
│   │   └── aiController.js     # AI features implementation
│   ├── models/                 # MongoDB schemas
│   │   ├── User.js
│   │   ├── Habit.js
│   │   ├── HabitLog.js
│   │   └── AIInsight.js
│   ├── middleware/             # Auth & error handling
│   ├── utils/                  # Helper functions & AI service
│   ├── config/                 # Database configuration
│   ├── server.js               # Express app setup
│   └── package.json
│
└── README.md
```

---

## 🔌 API Endpoints

### **Authentication**
- `POST /api/auth/register` – Create new account
- `POST /api/auth/login` – User login
- `POST /api/auth/logout` – User logout

### **Habits**
- `GET /api/habits` – Get all habits
- `POST /api/habits` – Create new habit
- `PUT /api/habits/:id` – Update habit
- `DELETE /api/habits/:id` – Delete habit

### **Logs**
- `GET /api/logs` – Get all habit logs
- `POST /api/logs` – Log habit completion
- `GET /api/logs/stats` – Get statistics
- `GET /api/logs/range` – Get logs in date range

### **AI Features** (Protected Routes)
- `POST /api/ai/weekly-report` – Generate weekly report
- `POST /api/ai/suggest-habits` – Get habit suggestions
- `POST /api/ai/recovery-plan` – Recovery strategy for broken streak
- `POST /api/ai/chat` – Ask questions about your data
- `GET /api/ai/morning` – Get morning motivation

---

## 🎨 Pages & Features

### **Landing Page**
- Hero section showcasing the app
- Quick feature overview
- Call-to-action buttons

### **Dashboard**
- Orbital habit animations
- Quick summary cards (total habits, active streaks, best streak, weekly rate)
- Today's task list

### **Habits**
- View all active habits
- Create new habits with custom icons and categories
- Quick-add interface
- Habit management actions

### **Weekly View**
- Week-at-a-glance completion status
- Daily habit tracking grid
- Progress visualization

### **Insights**
- Weekly AI-generated reports
- Habit suggestions from AI
- Recovery plans for broken streaks
- Interactive AI chat for data analysis

### **Stats**
- Comprehensive statistics dashboard
- Weekly and monthly bar charts
- Category breakdown (pie chart)
- Per-habit performance metrics
- 30-day trend analysis

---

## 🔐 Authentication & Security

- **JWT Authentication** – Secure token-based auth
- **Password Hashing** – bcryptjs for secure password storage
- **Protected Routes** – Role-based access control
- **CORS Configuration** – Secure cross-origin requests
- **Token Refresh** – Automatic session management

---

## 🎯 Future Enhancements

- [ ] Social sharing of achievements
- [ ] Habit recommendations based on trending habits
- [ ] Mobile app (React Native/Flutter)
- [ ] Advanced analytics and predictions
- [ ] Integration with calendar and reminders
- [ ] Export data functionality
- [ ] Habit templates and presets
- [ ] Community challenges

---
