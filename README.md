# SoleStyle - Premium E-commerce Shoe Store

## 📋 Overview

**SoleStyle** is a fully functional e-commerce web application for selling shoes online. Built with React and Vite, this project demonstrates a complete online shopping experience with modern UI/UX practices, state management, and responsive design. The application features a product catalog, shopping cart, wishlist, AI chatbot assistant, and complete checkout flow.

## ✨ Features

### 🛍️ Core E-commerce Features

| Feature | Description |
|---------|-------------|
| **Product Listing** | Responsive grid layout (3/2/1 columns) with product cards showing image, name, brand, price, rating (stars), and "Add to Cart" button |
| **Product Detail** | Detailed view with image gallery, size selector (US sizes 6-12), quantity picker, full description, material info, and "You May Also Like" section |
| **Shopping Cart** | Slide-out cart drawer with item list, quantity updates, remove button, subtotal calculation, and checkout button |
| **Checkout Modal** | Complete checkout form with order summary and success message |
| **Wishlist** | Save favorite items with heart icon and dedicated wishlist page |

### 🤖 AI Chatbot - "ShoeBot"

- Floating chat widget with toggle button (bottom right corner)
- Message history area with smooth scrolling
- Input field with send button
- Quick reply buttons for common queries
- Typing animation for realistic experience
- Pre-programmed responses for:
  - 📏 **Sizing & Size Guide** - Complete size chart information
  - 🚚 **Shipping & Delivery** - Shipping times and costs
  - 🔄 **Returns & Exchanges** - 30-day return policy
  - 👟 **Product Recommendations** - Based on preferences (running/casual/formal)
  - 📦 **Order Status** - Ask for order number
  - 👋 **Greetings** - Friendly welcome message

### 🔍 Filtering & Search

**Sidebar Filters:**
- Category (Men/Women/Kids/Sports)
- Price Range (slider with dynamic values)
- Size selector (US sizes 6-12)
- Brand filter (Nike, Adidas, New Balance, ASICS, Converse, Vans, Salomon)

**Search & Sort:**
- Search bar in navbar with real-time filtering
- Sort by: Price (Low-High), Price (High-Low), Rating, Newest

### 👤 User Features

- **Authentication Mock** - Login/Signup modal with email/password validation
- **Guest Checkout** - Continue without creating an account
- **User Profile** - Shows logged-in user name in navbar
- **LocalStorage Persistence** - Cart, wishlist, and login state saved automatically

### 🎨 Design Features

- **Responsive Design** - Mobile-first approach with media queries
- **Loading Skeletons** - Smooth loading states for better UX
- **Toast Notifications** - Feedback for user actions (add to cart, remove, etc.)
- **Smooth Animations** - Fade, slide, and hover effects
- **Pure CSS** - No frameworks, custom styling throughout

## 🛠️ Technologies Used

### Frontend Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library with functional components and hooks |
| **React Router DOM v6** | Navigation and routing between pages |
| **Vite** | Build tool and development server |
| **Context API** | State management (Cart, Wishlist, Auth) |
| **Pure CSS** | Custom styling |
| **Font Awesome 6** | Icons for UI elements |
| **Google Fonts (Inter)** | Modern sans-serif font |

### Development Tools

- ESLint for code quality
- Vite Plugin React for fast refresh
- LocalStorage for data persistence

