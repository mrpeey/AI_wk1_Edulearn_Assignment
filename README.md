# EduLearn - Mini E-Learning Platform

A modern, responsive e-learning platform built with HTML, CSS, and JavaScript that allows users to browse courses, track progress, and manage their learning journey.

## 🌟 Features

### Core Functionality
- **Course Catalog**: Browse 5 different courses with detailed information
- **User Authentication**: Sign up and login system with local storage
- **Progress Tracking**: Mark courses as completed and track learning progress
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🇱🇸 Lesotho Flag Theme**: Beautiful color scheme using the blue, white, and green colors of Lesotho's flag

### Pages
1. **Home Page (index.html)**: Landing page with featured courses and authentication
2. **Courses Page (courses.html)**: Detailed course catalog with enrollment options
3. **Progress Page (courseStatus.html)**: Personal dashboard showing learning statistics and course status

### Courses Available
1. **JavaScript Fundamentals** (8 hours, Beginner)
2. **Advanced CSS Techniques** (6 hours, Intermediate) 
3. **HTML5 & Web Structure** (4 hours, Beginner)
4. **React Fundamentals** (10 hours, Intermediate)
5. **Node.js Backend Development** (12 hours, Advanced)

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs completely in the browser

### Installation
1. Download or clone this repository
2. Open `index.html` in your web browser
3. Start exploring the platform!

### File Structure
```
e-learning-platform/
├── index.html              # Home page
├── courses.html            # Courses catalog
├── courseStatus.html       # Progress tracking
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # Application logic
├── images/                # Image assets (placeholder)
└── README.md             # This file
```

## 📱 How to Use

### 1. Registration & Login
- Click "Sign Up" or "Login" buttons in the navigation
- Create a new account or use existing credentials
- User data is stored locally in your browser

### 2. Browsing Courses
- Visit the "Courses" page to see all available courses
- Each course shows:
  - Duration and difficulty level
  - Number of enrolled students
  - Detailed curriculum
  - Learning objectives

### 3. Enrolling in Courses
- **Must be logged in** to enroll in courses
- Click "Start Learning" to enroll in a course
- Enrolled courses appear in your progress dashboard

### 4. Completing Courses
- After enrolling, you can mark courses as "Complete"
- Click "Mark as Complete" button on enrolled courses
- Completed courses show achievement notifications

### 5. Tracking Progress
- Visit "My Progress" page to see your learning dashboard
- View statistics including:
  - Total courses enrolled
  - Courses completed
  - Completion rate percentage
  - Total hours learned
- Courses are organized by status: Completed, Enrolled, Available

## 🎨 Design Features

### Modern UI/UX with Lesotho Flag Colors
- Clean, professional design with patriotic blue-to-green gradient accents
- Smooth animations and hover effects using Lesotho's national colors
- Intuitive navigation with active page indicators
- Mobile-first responsive layout
- **Color Palette**: Deep blue (#0054A6), vibrant green (#00A651), and clean white (#FFFFFF)

### Interactive Elements
- Modal dialogs for authentication
- Achievement notifications for course completion
- Dynamic course status updates
- Progress statistics dashboard

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Clear visual hierarchy
- Responsive text sizing

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup and modern elements
- **CSS3**: Flexbox, Grid, animations, and responsive design
- **JavaScript (ES6+)**: Modern JavaScript features and localStorage

### Data Storage
- **Local Storage**: User accounts and progress data persist in browser
- **JSON Data**: Course information stored as JavaScript objects
- **State Management**: Real-time UI updates based on user actions

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🔧 Customization

### Adding New Courses
Edit the `courseData` array in `js/script.js`:

```javascript
const courseData = [
    {
        id: 6,
        title: "Your New Course",
        description: "Course description...",
        duration: 8,
        level: "Beginner",
        students: 0,
        topics: ["Topic 1", "Topic 2"],
        placeholder: "NEW"
    }
    // ... existing courses
];
```

### Styling Changes
- Modify `css/style.css` for visual customizations
- CSS variables at the top of the file control colors and spacing
- Responsive breakpoints can be adjusted in media queries

### Functionality Extensions
- Add course categories/filtering
- Implement course search functionality
- Add user profile management
- Include course ratings and reviews

## 🐛 Known Limitations

- **Data Persistence**: Data is stored locally and will be lost if browser data is cleared
- **Multi-device Sync**: No cloud synchronization between devices
- **Course Content**: No actual course materials (videos, exercises)
- **User Management**: No password reset or email verification

## 🚀 Future Enhancements

- Backend integration for real data persistence
- Course content delivery system
- User progress analytics
- Social features (discussions, reviews)
- Payment integration for premium courses
- Instructor dashboard

## 📄 License

This project is for educational purposes. Feel free to modify and extend as needed.

## 🤝 Contributing

This is a demonstration project, but suggestions and improvements are welcome!

---

**Enjoy your learning journey with EduLearn!** 🎓