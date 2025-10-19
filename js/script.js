// E-Learning Platform JavaScript

// Global Variables
let currentUser = null;
let courses = [];
let userProgress = {};

// Course Data
const courseData = [
    {
        id: 1,
        title: "JavaScript Fundamentals",
        description: "Master the fundamentals of JavaScript programming. Learn variables, functions, objects, arrays, and DOM manipulation. Perfect for beginners starting their web development journey.",
        duration: 8,
        level: "Beginner",
        students: 1234,
        topics: [
            "Variables and Data Types",
            "Functions and Scope", 
            "DOM Manipulation",
            "Event Handling",
            "Asynchronous Programming"
        ],
        placeholder: "JS"
    },
    {
        id: 2,
        title: "Advanced CSS Techniques",
        description: "Take your CSS skills to the next level with advanced techniques. Learn Flexbox, Grid, animations, and modern layout methods. Create stunning, responsive designs.",
        duration: 6,
        level: "Intermediate",
        students: 987,
        topics: [
            "CSS Grid and Flexbox",
            "CSS Animations",
            "Responsive Design",
            "CSS Variables",
            "Modern Layout Techniques"
        ],
        placeholder: "CSS"
    },
    {
        id: 3,
        title: "HTML5 & Web Structure",
        description: "Build solid foundations with semantic HTML5. Learn modern HTML elements, accessibility best practices, and how to create well-structured web pages.",
        duration: 4,
        level: "Beginner",
        students: 1567,
        topics: [
            "Semantic HTML Elements",
            "Forms and Input Types",
            "Accessibility Guidelines",
            "Meta Tags and SEO",
            "HTML5 APIs"
        ],
        placeholder: "HTML"
    },
    {
        id: 4,
        title: "React Fundamentals",
        description: "Learn React.js from scratch. Build dynamic user interfaces with components, state management, and hooks. Perfect for modern web development.",
        duration: 10,
        level: "Intermediate",
        students: 2456,
        topics: [
            "React Components",
            "State and Props",
            "React Hooks",
            "Event Handling",
            "Component Lifecycle"
        ],
        placeholder: "REACT"
    },
    {
        id: 5,
        title: "Node.js Backend Development",
        description: "Build powerful backend applications with Node.js. Learn server-side JavaScript, APIs, databases, and deployment strategies.",
        duration: 12,
        level: "Advanced",
        students: 1789,
        topics: [
            "Express.js Framework",
            "REST API Development",
            "Database Integration",
            "Authentication & Security",
            "Deployment Strategies"
        ],
        placeholder: "NODE"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load stored data
    loadStoredData();
    
    // Initialize UI components
    initializeNavigation();
    initializeModals();
    initializeCourses();
    updateUI();
    
    // Page-specific initialization
    const currentPage = getCurrentPage();
    switch(currentPage) {
        case 'index':
            initializeHomePage();
            break;
        case 'courses':
            initializeCoursesPage();
            break;
        case 'courseStatus':
            initializeProgressPage();
            break;
    }
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().split('.').shift();
    return page || 'index';
}

// Data Management
function loadStoredData() {
    // Load user data
    const storedUser = localStorage.getItem('edulearn_user');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
    }
    
    // Load user progress
    const storedProgress = localStorage.getItem('edulearn_progress');
    if (storedProgress) {
        userProgress = JSON.parse(storedProgress);
    }
    
    // Initialize courses
    courses = [...courseData];
}

function saveUserData() {
    if (currentUser) {
        localStorage.setItem('edulearn_user', JSON.stringify(currentUser));
    }
    localStorage.setItem('edulearn_progress', JSON.stringify(userProgress));
}

// Navigation
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });
}

// Modal Management
function initializeModals() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeLogin = document.getElementById('closeLogin');
    const closeSignup = document.getElementById('closeSignup');
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const loginPrompt = document.getElementById('loginPrompt');

    // Event listeners
    if (loginBtn) {
        loginBtn.addEventListener('click', () => showModal('login'));
    }
    
    if (signupBtn) {
        signupBtn.addEventListener('click', () => showModal('signup'));
    }
    
    if (loginPrompt) {
        loginPrompt.addEventListener('click', () => showModal('login'));
    }
    
    if (closeLogin) {
        closeLogin.addEventListener('click', () => hideModal('login'));
    }
    
    if (closeSignup) {
        closeSignup.addEventListener('click', () => hideModal('signup'));
    }
    
    if (switchToSignup) {
        switchToSignup.addEventListener('click', (e) => {
            e.preventDefault();
            hideModal('login');
            showModal('signup');
        });
    }
    
    if (switchToLogin) {
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            hideModal('signup');
            showModal('login');
        });
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
    
    // Form submissions
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) hideModal('login');
        if (e.target === signupModal) hideModal('signup');
    });
}

function showModal(type) {
    const modal = document.getElementById(type + 'Modal');
    if (modal) {
        modal.classList.add('show');
        modal.style.display = 'flex';
    }
}

function hideModal(type) {
    const modal = document.getElementById(type + 'Modal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
    }
}

// Authentication
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation (in a real app, this would be server-side)
    if (email && password) {
        currentUser = {
            email: email,
            name: email.split('@')[0], // Simple name extraction
            loginTime: new Date().toISOString()
        };
        
        // Initialize user progress if doesn't exist
        if (!userProgress[currentUser.email]) {
            userProgress[currentUser.email] = {
                enrolled: [],
                completed: []
            };
        }
        
        saveUserData();
        hideModal('login');
        updateUI();
        showNotification('Welcome back!', 'success');
        
        // Reset form
        document.getElementById('loginForm').reset();
    }
}

function handleSignup(e) {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    // Simple validation
    if (name && email && password) {
        currentUser = {
            email: email,
            name: name,
            signupTime: new Date().toISOString()
        };
        
        // Initialize user progress
        userProgress[currentUser.email] = {
            enrolled: [],
            completed: []
        };
        
        saveUserData();
        hideModal('signup');
        updateUI();
        showNotification('Account created successfully!', 'success');
        
        // Reset form
        document.getElementById('signupForm').reset();
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('edulearn_user');
    updateUI();
    showNotification('Logged out successfully!', 'info');
}

// UI Updates
function updateUI() {
    const loginBtn = document.getElementById('loginBtn');
    const userProfile = document.getElementById('userProfile');
    const userName = document.getElementById('userName');
    
    if (currentUser) {
        // User is logged in
        if (loginBtn) {
            loginBtn.style.display = 'none';
        }
        if (userProfile) {
            userProfile.style.display = 'block';
        }
        if (userName) {
            userName.textContent = currentUser.name;
        }
    } else {
        // User is not logged in
        if (loginBtn) {
            loginBtn.style.display = 'inline-block';
            loginBtn.textContent = 'Login';
        }
        if (userProfile) {
            userProfile.style.display = 'none';
        }
    }
    
    // Update course enrollment buttons
    updateCourseButtons();
}

// Course Management
function initializeCourses() {
    courses = [...courseData];
}

function initializeCoursesPage() {
    const enrollBtns = document.querySelectorAll('.enroll-btn');
    const completeBtns = document.querySelectorAll('.complete-btn');
    
    enrollBtns.forEach(btn => {
        btn.addEventListener('click', handleEnrollment);
    });
    
    completeBtns.forEach(btn => {
        btn.addEventListener('click', handleCompletion);
    });
    
    updateCourseButtons();
}

function handleEnrollment(e) {
    const courseId = parseInt(e.target.dataset.courseId);
    
    if (!currentUser) {
        showModal('login');
        return;
    }
    
    const userProgressData = userProgress[currentUser.email];
    
    if (!userProgressData.enrolled.includes(courseId)) {
        userProgressData.enrolled.push(courseId);
        saveUserData();
        updateCourseButtons();
        showNotification('Successfully enrolled in course!', 'success');
    }
}

function handleCompletion(e) {
    const courseId = parseInt(e.target.dataset.courseId);
    
    if (!currentUser) {
        showModal('login');
        return;
    }
    
    const userProgressData = userProgress[currentUser.email];
    
    if (!userProgressData.completed.includes(courseId)) {
        userProgressData.completed.push(courseId);
        
        // Remove from enrolled if present
        const enrolledIndex = userProgressData.enrolled.indexOf(courseId);
        if (enrolledIndex > -1) {
            userProgressData.enrolled.splice(enrolledIndex, 1);
        }
        
        saveUserData();
        updateCourseButtons();
        showAchievement(courseId);
    }
}

function updateCourseButtons() {
    if (!currentUser) return;
    
    const userProgressData = userProgress[currentUser.email];
    const enrollBtns = document.querySelectorAll('.enroll-btn');
    const completeBtns = document.querySelectorAll('.complete-btn');
    
    enrollBtns.forEach(btn => {
        const courseId = parseInt(btn.dataset.courseId);
        
        if (userProgressData.completed.includes(courseId)) {
            btn.style.display = 'none';
            const completeBtn = document.querySelector(`.complete-btn[data-course-id="${courseId}"]`);
            if (completeBtn) {
                completeBtn.style.display = 'none';
            }
            // Show completed status
            btn.parentElement.innerHTML += '<span class="btn btn-success" style="cursor: default;">✓ Completed</span>';
        } else if (userProgressData.enrolled.includes(courseId)) {
            btn.style.display = 'none';
            const completeBtn = document.querySelector(`.complete-btn[data-course-id="${courseId}"]`);
            if (completeBtn) {
                completeBtn.style.display = 'inline-block';
            }
        }
    });
}

// Progress Page
function initializeProgressPage() {
    const notLoggedIn = document.getElementById('notLoggedIn');
    const progressContent = document.getElementById('progressContent');
    
    if (!currentUser) {
        if (notLoggedIn) notLoggedIn.style.display = 'block';
        if (progressContent) progressContent.style.display = 'none';
        return;
    }
    
    if (notLoggedIn) notLoggedIn.style.display = 'none';
    if (progressContent) progressContent.style.display = 'block';
    
    updateProgressStats();
    updateProgressCourses();
}

function updateProgressStats() {
    if (!currentUser) return;
    
    const userProgressData = userProgress[currentUser.email];
    const totalEnrolled = userProgressData.enrolled.length + userProgressData.completed.length;
    const totalCompleted = userProgressData.completed.length;
    const completionRate = totalEnrolled > 0 ? Math.round((totalCompleted / totalEnrolled) * 100) : 0;
    const totalHours = userProgressData.completed.reduce((sum, courseId) => {
        const course = courses.find(c => c.id === courseId);
        return sum + (course ? course.duration : 0);
    }, 0);
    
    // Update DOM elements
    const elements = {
        totalEnrolled: document.getElementById('totalEnrolled'),
        totalCompleted: document.getElementById('totalCompleted'),
        completionRate: document.getElementById('completionRate'),
        totalHours: document.getElementById('totalHours'),
        completedCount: document.getElementById('completedCount'),
        enrolledCount: document.getElementById('enrolledCount')
    };
    
    if (elements.totalEnrolled) elements.totalEnrolled.textContent = totalEnrolled;
    if (elements.totalCompleted) elements.totalCompleted.textContent = totalCompleted;
    if (elements.completionRate) elements.completionRate.textContent = completionRate + '%';
    if (elements.totalHours) elements.totalHours.textContent = totalHours;
    if (elements.completedCount) elements.completedCount.textContent = totalCompleted;
    if (elements.enrolledCount) elements.enrolledCount.textContent = userProgressData.enrolled.length;
}

function updateProgressCourses() {
    if (!currentUser) return;
    
    const userProgressData = userProgress[currentUser.email];
    const completedCoursesContainer = document.getElementById('completedCourses');
    const enrolledCoursesContainer = document.getElementById('enrolledCourses');
    const availableCoursesContainer = document.getElementById('availableCourses');
    
    // Clear containers
    if (completedCoursesContainer) completedCoursesContainer.innerHTML = '';
    if (enrolledCoursesContainer) enrolledCoursesContainer.innerHTML = '';
    if (availableCoursesContainer) availableCoursesContainer.innerHTML = '';
    
    courses.forEach(course => {
        const courseCard = createProgressCourseCard(course);
        
        if (userProgressData.completed.includes(course.id)) {
            if (completedCoursesContainer) {
                completedCoursesContainer.appendChild(courseCard);
            }
        } else if (userProgressData.enrolled.includes(course.id)) {
            if (enrolledCoursesContainer) {
                enrolledCoursesContainer.appendChild(courseCard);
            }
        } else {
            if (availableCoursesContainer) {
                availableCoursesContainer.appendChild(courseCard);
            }
        }
    });
    
    // Update available count
    const availableCount = document.getElementById('availableCount');
    if (availableCount) {
        const availableCourses = courses.length - userProgressData.enrolled.length - userProgressData.completed.length;
        availableCount.textContent = availableCourses;
    }
}

function createProgressCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    
    let statusClass = 'status-available';
    let statusText = 'Available';
    let actionButton = `<button class="btn btn-primary enroll-btn" data-course-id="${course.id}">Enroll</button>`;
    
    if (currentUser) {
        const userProgressData = userProgress[currentUser.email];
        
        if (userProgressData.completed.includes(course.id)) {
            statusClass = 'status-completed';
            statusText = 'Completed';
            actionButton = '<span class="btn btn-success" style="cursor: default;">✓ Completed</span>';
        } else if (userProgressData.enrolled.includes(course.id)) {
            statusClass = 'status-enrolled';
            statusText = 'Enrolled';
            actionButton = `<button class="btn btn-success complete-btn" data-course-id="${course.id}">Mark as Complete</button>`;
        }
    }
    
    card.innerHTML = `
        <div class="course-image">
            <div class="course-placeholder">${course.placeholder}</div>
            <div class="course-status ${statusClass}">${statusText}</div>
        </div>
        <div class="course-info">
            <h3>${course.title}</h3>
            <p>${course.description.substring(0, 100)}...</p>
            <div class="course-meta">
                <span class="duration">📚 ${course.duration} hours</span>
                <span class="level">🎯 ${course.level}</span>
            </div>
            <div class="course-actions">
                ${actionButton}
            </div>
        </div>
    `;
    
    // Add event listeners
    const enrollBtn = card.querySelector('.enroll-btn');
    const completeBtn = card.querySelector('.complete-btn');
    
    if (enrollBtn) {
        enrollBtn.addEventListener('click', handleEnrollment);
    }
    
    if (completeBtn) {
        completeBtn.addEventListener('click', handleCompletion);
    }
    
    return card;
}

// Home Page
function initializeHomePage() {
    // No specific initialization needed for home page
    // Course cards are static HTML
}

// Achievement System
function showAchievement(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;
    
    const achievementModal = document.getElementById('achievementModal');
    const achievementText = document.getElementById('achievementText');
    const closeAchievement = document.getElementById('closeAchievement');
    
    if (achievementText) {
        achievementText.textContent = `You've successfully completed "${course.title}"!`;
    }
    
    if (achievementModal) {
        achievementModal.classList.add('show');
        achievementModal.style.display = 'flex';
    }
    
    if (closeAchievement) {
        closeAchievement.addEventListener('click', () => {
            achievementModal.classList.remove('show');
            achievementModal.style.display = 'none';
        });
    }
    
    // Auto-close after 5 seconds
    setTimeout(() => {
        if (achievementModal) {
            achievementModal.classList.remove('show');
            achievementModal.style.display = 'none';
        }
    }, 5000);
}

// Notification System
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Set background color based on type (using Lesotho flag colors)
    switch(type) {
        case 'success':
            notification.style.background = '#00A651'; // Lesotho green
            break;
        case 'error':
            notification.style.background = '#f56565';
            break;
        case 'warning':
            notification.style.background = '#ed8936';
            break;
        default:
            notification.style.background = '#0054A6'; // Lesotho blue
    }
    
    // Add to document
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Utility Functions
function getCourseById(id) {
    return courses.find(course => course.id === id);
}

function getUserProgress() {
    if (!currentUser) return null;
    return userProgress[currentUser.email];
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    showNotification('Something went wrong. Please try again.', 'error');
});

// Export functions for global access (if needed)
window.EduLearnApp = {
    showModal,
    hideModal,
    getCurrentUser: () => currentUser,
    getCourses: () => courses,
    getUserProgress
};