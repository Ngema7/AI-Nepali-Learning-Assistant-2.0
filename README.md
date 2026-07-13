AI-Nepali-Learning-Assistant/
│
├── backend/
│   ├── src/
│   │
│   ├── config/
│   │   ├── db.js
│   │   ├── passport.js
│   │   ├── cloudinary.js
│   │   ├── redis.js
│   │   └── openai.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── courseController.js
│   │   ├── lessonController.js
│   │   ├── quizController.js
│   │   ├── aiController.js
│   │   ├── progressController.js
│   │   ├── badgeController.js
│   │   ├── leaderboardController.js
│   │   ├── subscriptionController.js
│   │   └── adminController.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── admin.js
│   │   ├── upload.js
│   │   ├── validation.js
│   │   ├── rateLimiter.js
│   │   └── errorHandler.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Course.js
│   │   ├── Lesson.js
│   │   ├── Quiz.js
│   │   ├── Question.js
│   │   ├── Progress.js
│   │   ├── Badge.js
│   │   ├── Leaderboard.js
│   │   ├── Certificate.js
│   │   ├── ChatHistory.js
│   │   ├── Subscription.js
│   │   ├── Payment.js
│   │   └── Notification.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── courseRoutes.js
│   │   ├── lessonRoutes.js
│   │   ├── quizRoutes.js
│   │   ├── aiRoutes.js
│   │   ├── progressRoutes.js
│   │   ├── subscriptionRoutes.js
│   │   ├── paymentRoutes.js
│   │   └── adminRoutes.js
│   │
│   ├── services/
│   │   ├── geminiService.js
│   │   ├── openaiService.js
│   │   ├── emailService.js
│   │   ├── notificationService.js
│   │   ├── certificateService.js
│   │   └── paymentService.js
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   |
│   │   ├── calculateXP.js
│   │   ├── calculateStreak.js
│   │   ├── logger.js
│   │   └── helpers.js
│   │
|   |
│   ├── app.js
│   └── server.js
│
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
└── frontend/
    │
    ├── public/
    │
    ├── src/
    │
    ├── assets/
    │   ├── images/
    │   ├── icons/
    │   └── logos/
    │
    ├── components/
    │   │
    │   ├── common/
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Sidebar.jsx
    │   │   └── Loader.jsx
    │   │
    │   ├── landingComponents/
    │   │   ├── Navbar/
    │   │   ├── Hero/
    │   │   ├── Features/
    │   │   ├── HowItWorks/
    │   │   ├── Pricing/
    │   │   ├── Testimonials/
    │   │   ├── FAQ/
    │   │   ├── CTA/
    │   │   └── Footer/
    │   │
    │   ├── auth/
    │   │   ├── Login.jsx
    │   │   |
    │   │   └── GoogleLoginButton.jsx
    │   │
    │   ├── dashboard/
    │   │   ├── DashboardNavbar.jsx
    │   │   ├── DashboardSidebar.jsx
    │   │   ├── StatsCard.jsx
    │   │   ├── ProgressCard.jsx
    │   │   └── RecentActivity.jsx
    │   │
    │   ├── ai/
    │   │   ├── AiChat.jsx
    │   │   ├── ChatBubble.jsx
    │   │   ├── VoiceInput.jsx
    │   │   └── AiTyping.jsx
    │   │
    │   ├── quiz/
    │   ├── course/
    │   └── profile/
    │
    ├── pages/
    │   ├── LandingPage.jsx
    │   ├── LoginPage.jsx
    │   ├── Dashboard
    |   |   |-- Dashboard.jsx
    |   |   |-- Dashboard.css
    |   |-- SidebarSettings
    |   |   |-- Setting.jsx
    |   |   |-- Setting.css
    │   ├── Courses.jsx
    │   ├── Quiz.jsx
    │   ├── AiTutor.jsx
    │   ├── Profile.jsx
    │   ├── Settings.jsx
    │   ├── Pricing.jsx
    │   └── NotFound.jsx
    │
    ├── routes/
    │   ├── AppRoutes.jsx
    │   ├── PrivateRoute.jsx
    │   └── AdminRoute.jsx
    │
    ├── context/
    │   ├── AuthContext.jsx
    │   ├── UserContext.jsx
    │   └── ThemeContext.jsx
    │
    ├── services/
    │   ├── api.js
    │   ├── authService.js
    │   ├── aiService.js
    │   └── paymentService.js
    │
    ├── hooks/
    │   ├── useAuth.js
    │   ├── useAi.js
    │   └── useTheme.js
    │
    ├── data/
    │
    ├── utils/
    │   ├── constants.js
    │   ├── helpers.js
    │   └── validators.js
    │
    ├── App.jsx
    ├── main.jsx
    └── index.css
    │
    ├── package.json
    └── vite.config.js









