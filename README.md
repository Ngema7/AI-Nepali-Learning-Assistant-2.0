📚 AI Nepali Learning Assistant
An AI-powered learning platform designed to help Nepali students learn through interactive courses, quizzes, AI tutor chat, progress tracking, and gamified learning experience.
🚀 Features
🔐 Authentication (Email + Google OAuth)
🤖 AI Tutor Chat (OpenAI / Gemini integration ready)
📚 Course & Lesson Management
🧠 Interactive Quizzes System
📊 User Progress Tracking
🏆 XP, Badges & Leaderboard System
🎓 Certificates Generation
💳 Subscription & Payment System (ready structure)
👨‍🏫 Admin Dashboard Support
📱 Responsive Frontend (React + Vite)
🏗️ Tech Stack
Frontend
React.js (Vite)
React Router DOM
Context API
Axios
Vanilla CSS / Custom UI
Backend
Node.js
Express.js
MongoDB + Mongoose
Passport.js (Google OAuth)
JWT Authentication
Redis (optional caching)
Cloudinary (media uploads)
📁 Project Structure
AI-Nepali-Learning-Assistant/
│
├── backend/
│   ├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── uploads/
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── hooks/
│   ├── services/
│   ├── assets/
│   └── main.jsx
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/AI-Nepali-Learning-Assistant.git
cd AI-Nepali-Learning-Assistant
2️⃣ Backend Setup
cd backend
npm install
Create .env file
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

FRONTEND_URL=http://localhost:5173
Run backend
npm run dev
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
🔐 Authentication Flow
Email/Password login via JWT
Google OAuth login via Passport.js
On successful login:
Token generated
User redirected to dashboard or onboarding
🤖 AI Features
AI Chat Tutor (Nepali + English support)
Smart quiz generation
Personalized learning recommendations (planned)
📊 Gamification System
XP points system
Daily streak tracking
Badges for achievements
Global leaderboard
💳 Payments (Structure Ready)
Subscription model prepared
Payment service integrated structure (Stripe/Razorpay ready)
🛠️ Future Improvements
📱 Mobile app (React Native)
🎤 Voice-based AI tutor
🌐 Multi-language support (Nepali + English + Hindi)
📈 Advanced analytics dashboard
🧑‍🏫 Teacher dashboard
🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
📜 License
MIT License © 2026
👨‍💻 Author
Built with ❤️ by Ngema