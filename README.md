# QuizTime - Modern Quiz Application

A full-stack quiz application built with React + Vite frontend and Node.js + Express backend, featuring admin and student dashboards with modern UI/UX.

## Features

### 🔐 Authentication System
- Role-based login (Admin/Student)
- User registration and profile management
- JWT token-based authentication
- Secure password hashing with bcrypt

### 👨‍💼 Admin Dashboard
- **Dashboard Overview**: Statistics on students, questions, and results
- **Profile Management**: Update personal information and account settings
- **Question Management**: Add, edit, delete, and manage quiz questions
- **Student Management**: View and manage registered students
- **Results Management**: View quiz results and analytics

### 🎓 Student Dashboard
- **Profile Management**: Update personal information
- **Interactive Quiz**: Take quizzes with modern UI
- **Progress Tracking**: Real-time progress indicators
- **Results & Celebrations**: Animated celebrations for perfect scores

### 🎨 Modern UI Features
- Glassmorphism design with backdrop blur effects
- Responsive design for all devices
- Smooth animations and transitions
- Toast notifications for user feedback
- Loading states and error handling
- Confetti animations for achievements

### Backend
- Node.js with Express framework
- MongoDB Atlas for database
- Mongoose ODM for MongoDB
- JWT for authentication
- bcryptjs for password hashing
- CORS enabled for cross-origin requests

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Git

### Backend Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd quiz-app
   ```
2. Install backend dependencies:
   ```bash
   npm install express mongoose bcryptjs jsonwebtoken cors body-parser
   ```
3. Create a `.env` file in the root directory:
   ```env
   JWT_SECRET=your-super-secret-jwt-key
   MONGODB_URI=your-mongodb-atlas-connection-string
   PORT=9000
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```
   Server will run on `http://localhost:9000`



## API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login

### Users
- `GET /users/profile` - Get user profile
- `PUT /users/profile` - Update user profile
- `DELETE /users/profile` - Delete user account

### Questions
- `GET /questions` - Get all questions
- `POST /questions` - Create new question (Admin only)
- `PUT /questions/:id` - Update question (Admin only)
- `DELETE /questions/:id` - Delete question (Admin only)
- `DELETE /questions` - Delete all questions (Admin only)

### Results
- `POST /results` - Submit quiz result
- `GET /results` - Get results (Admin sees all, students see their own)
- `DELETE /results` - Delete all results (Admin only)

### Admin
- `GET /admin/students` - Get all students (Admin only)
- `DELETE /admin/students/:id` - Delete student (Admin only)
- `GET /admin/stats` - Get dashboard statistics (Admin only)

## Usage

### For Administrators
1. Register with admin role or login with existing admin credentials
2. Access the admin dashboard to:
   - View statistics and analytics
   - Manage quiz questions
   - Monitor student performance
   - Manage user accounts

### For Students
1. Register with student role or login with existing credentials
2. Access the student dashboard to:
   - Update profile information
   - Take interactive quizzes
   - View results and progress

## Features in Detail

### Authentication System
- Secure JWT-based authentication
- Role-based access control
- Password encryption with bcrypt
- Persistent login sessions

### Quiz System
- Interactive question interface
- Real-time progress tracking
- Answer validation and scoring
- Results analytics and storage

### Modern UI/UX
- Glassmorphism design language
- Responsive layouts for all devices
- Smooth animations and micro-interactions
- Accessible form controls and navigation

## Deployment

### Backend Deployment (Vercel/Railway/Heroku)
1. Set up environment variables
2. Deploy `server.js` with your preferred platform
3. Update CORS settings for production domain

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Update API base URL for production

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License
This project is licensed under the MIT License.

## Support
For support and questions, please open an issue in the repository or contact the development team.

**QuizTime - Making learning interactive and fun! 🎓✨**
