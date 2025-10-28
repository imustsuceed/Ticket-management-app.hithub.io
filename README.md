# My Ticket App (React Version)

A responsive and accessible **Ticket Management Web Application** built with **React**.  
This project is part of a multi-framework challenge (React, Vue.js, Twig) for consistent UI, authentication, and CRUD functionality.

---

## Live Demo
[https://github.com/imustsuceed/Ticket-management-app.hithub.io/

---

## 🚀 Overview

**My Ticket App** allows users to:
- Register or log in securely (simulated via localStorage).
- Create, view, edit, and delete support tickets.
- View real-time statistics for open, in-progress, and closed tickets.
- Enjoy a consistent, fully responsive UI with hero waves, decorative circles, and card-based layouts.

---

## Tech Stack

- **React 18+**
- **React Router DOM** – for navigation & protected routes
- **UUID** – for user and ticket IDs
- **localStorage** – for authentication and ticket data
- **CSS (Layouts.css)** – for consistent design and responsiveness

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-ticket-app.git
   cd my-ticket-app
Install dependencies

bash
Copy code
npm install
Run the app

bash
Copy code
npm start
Open the app in your browser at:

arduino
Copy code
http://localhost:3000
 Project Structure
my-ticket-app/
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── ProtectedRoute.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Dashboard.js
│   │   ├── tickets/
│   │   │   └── TicketDashboard.js
│   │   └── auth/
│   │       ├── Login.js
│   │       └── Signup.js
│   │
│   ├── utils/
│   │   ├── auth.js
│   │   └── storage.js
│   │
│   ├── styles/
│   │   └── layouts.css
│   │
│   ├── App.js
│   └── index.js
│
└── package.json
Authentication Flow
Signup: Adds user info to localStorage.

Login: Verifies user credentials, creates session (ticketapp_session).

Logout: Clears session and redirects to Home.

ProtectedRoute: Redirects unauthorized users to /auth/login.

 Features Summary
Feature	Description
 Landing Page	Hero section with wave SVG, circles, and feature cards.
Authentication	Login/Signup with inline validation.
 Dashboard	Displays ticket stats and quick navigation.
 Ticket CRUD	Create, view, edit, and delete tickets.
 Session Handling	Simulated with localStorage.
 Responsive UI	Works on mobile, tablet, and desktop.
 Accessibility	Semantic HTML, alt texts, and proper contrast.

 Color & Status Codes
Ticket Status	Color
🟢 Open	Green
🟠 In Progress	Amber
⚪ Closed	Gray

 UI Components & State
Navbar: Responsive header with links and logout button.

Hero Section: Wavy background and decorative circles.

Feature Cards: Box-like content with hover animation.

Tickets: Stored and managed through storage.js.

Session: Controlled in auth.js with helper functions.

🔎 Accessibility
Uses semantic tags (main, header, section, nav, footer).

Focus states visible on all interactive elements.

Color contrast compliant with WCAG AA.

Text alternatives (aria-label, alt) used where needed.

 Example Test Credentials
makefile
Copy code
Email: demo@ticketapp.com
Password: 123456
 Known Issues
Data resets on localStorage clear.

No backend — authentication is simulated.

Future Enhancements
Add dark mode.

Integrate backend API for persistent data.


 Related Versions
This React version is part of a 3-framework challenge:


License
MIT © 2025 — Developed by Malachy Udo

yaml
Copy code
