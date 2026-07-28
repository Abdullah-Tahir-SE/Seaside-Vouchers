<div align="center">
  <img src="public/favicon.svg" alt="Seaside Vouchers Logo" width="120" />
  <h1>🏖️ Seaside Vouchers - Enterprise Admin Dashboard</h1>
  
  <p>
    <strong>A modern, high-performance administrative panel for managing partnered companies, promotional vouchers, and customer engagement.</strong>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  </p>
</div>

<hr />

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage & Workflows](#-usage--workflows)
- [Future Enhancements](#-future-enhancements)
- [License](#-license)

---

## 🌟 Overview

**Seaside Vouchers** is an enterprise-grade administrative dashboard designed to streamline the management of promotional campaigns. It acts as the central hub where administrators can oversee partner companies, generate and track discount vouchers, manage user access, and visualize revenue streams. 

The application is built with a heavy emphasis on **User Experience (UX)** and **Performance**. Featuring a vibrant, glassmorphic UI with micro-interactions, the dashboard ensures that complex administrative tasks feel intuitive and engaging.

---

## ✨ Key Features

### 🏢 Partner Company Management
- **Centralized Directory:** View a comprehensive grid of all partnered vendors and companies.
- **Detailed Profiles:** Dedicated dynamic routes for each company (`/company/:id`) displaying their specific vouchers, revenue, and historical data.
- **Streamlined Onboarding:** Add new partners instantly via a highly optimized, fully responsive modal interface without leaving the current context.

### 🎟️ Voucher & Campaign System
- **Real-time Offer Tracking:** Monitor active, pending, and expired vouchers across all categories (Dining, Leisure, Accommodation).
- **Voucher Creation Engine:** A robust form wizard allowing admins to attach custom banners, company logos, validity dates, and rich descriptions to new vouchers.
- **Deep-Linking:** Shareable and distinct URLs for individual voucher details (`/voucher/:id`).

### 👥 User Administration
- **Access Control:** Categorized views for **Active** and **Blocked** users.
- **Quick Actions:** Suspend or reactivate user accounts directly from the data tables with immediate visual feedback.

### 🎨 State-of-the-Art UI/UX
- **Design System:** Powered by a customized Tailwind configuration ensuring absolute consistency in typography, colors (signature Cyan and Orange), and spacing.
- **Responsive by Default:** Fluid layouts that adapt flawlessly from 4K desktop monitors down to mobile devices.
- **Micro-Animations:** Hover states, focus rings, and modal transitions that make the interface feel alive and premium.

---

## 🛠️ Architecture & Tech Stack

This project leverages modern frontend tooling to ensure rapid development, exceptional performance, and maintainability.

- **Frontend Framework:** [React.js (v18)](https://react.dev/) - Utilizing Functional Components and Hooks for predictable state management.
- **Build & Development:** [Vite](https://vitejs.dev/) - Chosen for its blazing fast Hot Module Replacement (HMR) and highly optimized production builds.
- **Routing:** [React Router DOM (v6)](https://reactrouter.com/) - Handling client-side routing, nested layouts, and URL parameters.
- **Styling Methodology:** [Tailwind CSS (v3)](https://tailwindcss.com/) - Utility-first CSS for rapid UI development without writing custom CSS files.
- **Icons & Graphics:** A blend of custom, high-fidelity SVGs and [Lucide React](https://lucide.dev/) for crisp, scalable iconography.

---

## 📁 Project Structure

The codebase is organized modularly to support infinite scalability.

```text
seaside-vouchers/
├── public/                 # Static assets (Favicons, public images)
├── src/
│   ├── assets/             # Internal graphical assets, logos, and mock images
│   ├── components/         # Reusable, stateless UI blocks (Cards, Modals, Inputs)
│   ├── data/               # Centralized mock data services (vouchers.js, etc.)
│   ├── pages/              # Smart components representing full route views
│   ├── App.jsx             # Root component containing the Route configuration
│   ├── index.css           # Global stylesheet and Tailwind imports
│   └── main.jsx            # Application entry point and DOM rendering
├── .gitignore              # Git ignore rules
├── eslint.config.js        # Linter configuration for code quality
├── package.json            # Project dependencies and NPM scripts
├── tailwind.config.js      # Custom theme definitions and plugins
└── vite.config.js          # Vite bundler configuration
```

---

## 🚀 Getting Started

Follow these instructions to set up the project locally for development or testing.

### Prerequisites

Ensure you have the following installed on your local development machine:
- **Node.js** (v16.x or higher)
- **npm** (v8.x or higher)
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Abdullah-Tahir-SE/Seaside-Vouchers.git
   ```

2. **Navigate into the directory:**
   ```bash
   cd Seaside-Vouchers
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Boot up the development server:**
   ```bash
   npm run dev
   ```

5. **View the application:**
   Open your browser and navigate to `http://localhost:5173`.

---

## 📚 Usage & Workflows

- **Navigating the App:** Use the top navigation bar to switch between the Dashboard, Users, Company, and Vouchers modules. The active state is clearly highlighted.
- **Adding Data:** Look for the **"Add"** buttons (e.g., *Add Company*, *Add Vouchers*). Clicking these triggers a beautifully animated modal overlay where you can input data.
- **Viewing Details:** Clicking on any Company Card or Voucher Card will seamlessly route you to a dedicated detail page with expanded statistics and imagery.

---

## 🔮 Future Enhancements

While this dashboard is fully functional as a frontend application, future updates may include:
1. **Backend Integration:** Connecting to a Node.js/Express REST API for persistent database storage (MongoDB/PostgreSQL).
2. **Authentication:** Implementing JWT-based secure login flows and role-based access control (RBAC).
3. **Advanced Analytics:** Integrating interactive charts (using Recharts or Chart.js) into the Revenue and Dashboard pages.

---

<div align="center">
  <p>Built with ❤️ by <strong>Abdullah Tahir</strong></p>
</div>
