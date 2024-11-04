
# Multi-User DRF React Project

## Introduction

This project is a comprehensive web application built using Django REST Framework for the backend and React for the frontend. It aims to handle multi-user interactions, manage product data, and facilitate various operations such as product browsing, checkout, and user management in a modular, scalable manner.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Overview](#api-overview)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Development Workflow](#development-workflow)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Features

### Backend (Django REST Framework)
- **Multi-user Management**: Built-in support for handling different user types and roles.
- **Product Management**: API endpoints for CRUD operations on products and categories.
- **Order and Checkout Handling**: APIs for creating and managing orders and their items.
- **Scalable Structure**: Modular design for easy extension.
- **Custom Pagination**: Enhanced data viewing with custom pagination logic.

### Frontend (React)
- **User Interface**: Modern, responsive React components for seamless user experience.
- **Data Integration**: Integration with backend APIs to display products, categories, and user details.
- **Checkout Workflow**: Interactive UI for order placement and checkout.
- **Component-Based Architecture**: Reusable and maintainable React components.

## Project Structure

\`\`\`plaintext
multi_user_drf_react-main/
│
├── backend/                                 # Backend root directory
│   ├── core/                                # Core app for product and order management
│   │   ├── migrations/                      # Database migrations
│   │   ├── __init__.py                      # Package initializer
│   │   ├── admin.py                         # Django admin setup
│   │   ├── apps.py                          # Core app configuration
│   │   ├── models.py                        # Data models for products, orders, etc.
│   │   ├── pagination.py                    # Custom pagination logic
│   │   ├── serializers.py                   # Serializers for converting data to JSON
│   │   ├── urls.py                          # Routing for core app
│   │   ├── views.py                         # Logic for handling requests
│   │   └── tests.py                         # Unit tests for the core app
│   │
│   ├── backend/                             # Project-wide configuration
│   │   ├── __init__.py                      # Package initializer
│   │   ├── asgi.py                          # ASGI configuration for async support
│   │   ├── settings.py                      # Main Django settings
│   │   ├── urls.py                          # Main URL configuration
│   │   ├── wsgi.py                          # WSGI entry point for deployment
│   │   └── manage.py                        # Django management script
│
├── frontend/                                # Frontend root directory
│   ├── public/                              # Static assets and HTML templates
│   ├── src/                                 # Source files for the React app
│   │   ├── components/                      # Reusable React components
│   │   │   ├── categories.js                # Component to display categories
│   │   │   ├── categoryproducts.js          # Products by category display
│   │   │   ├── checkout.js                  # Checkout process component
│   │   │   ├── footer.js                    # Footer UI component
│   │   │   ├── header.js                    # Header and navigation component
│   │   │   ├── home.js                      # Home page component
│   │   │   ├── product.js                   # Product display component
│   │   │   ├── productdetail.js             # Detailed view for individual products
│   │   │   └── products.js                  # Component listing multiple products
│   │   ├── App.js                           # Main React application component
│   │   ├── index.js                         # Entry point for React app
│   │   ├── App.css                          # Main CSS for the app
│   │   └── setupTests.js                    # Test setup for React
│   │
│   ├── .gitignore                           # Files and directories to ignore in Git
│   ├── README.md                            # Frontend-specific documentation
│   ├── package.json                         # Node.js dependencies and scripts
│   └── package-lock.json                    # Lock file for npm dependencies
│
├── main.py                                  # Main application script or utility file
└── docker-compose.yml                       # Docker Compose configuration for deployment
\`\`\`

## Installation

### Prerequisites
- **Python 3.10+**
- **Node.js and npm**
- **Docker** (optional, for containerized deployment)

### Backend Setup
1. Navigate to the `backend` directory:
   \`\`\`bash
   cd backend
   \`\`\`

2. Create and activate a virtual environment (recommended):
   \`\`\`bash
   python -m venv env
   source env/bin/activate  # On Windows use 'env\Scripts\activate'
   \`\`\`

3. Install required Python packages:
   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

4. Run database migrations:
   \`\`\`bash
   python manage.py migrate
   \`\`\`

5. Start the backend server:
   \`\`\`bash
   python manage.py runserver
   \`\`\`

### Frontend Setup
1. Navigate to the `frontend` directory:
   \`\`\`bash
   cd frontend
   \`\`\`

2. Install frontend dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the frontend development server:
   \`\`\`bash
   npm start
   \`\`\`

## Usage

- **Backend**: Access the API endpoints at `http://localhost:8000`.
- **Frontend**: Navigate to `http://localhost:3000` for the React app.

## API Overview

- **Products Endpoint**: `/api/products/` - CRUD operations for products.
- **Orders Endpoint**: `/api/orders/` - Manage orders and their items.
- **User Endpoint**: `/api/users/` - User management and authentication.

## Dependencies

### Backend
- **Django** 4.x
- **Django REST Framework**
- **Pillow** for image handling

### Frontend
- **React** 17.x+
- **React Router** for navigation
- **Axios** for HTTP requests

## Deployment

Use Docker Compose for containerized deployment:
\`\`\`bash
docker-compose up --build
\`\`\`

## Development Workflow

- **Run backend server**: \`python manage.py runserver\`
- **Run frontend server**: \`npm start\`

## License

This project is licensed under the MIT License. See \`LICENSE\` for more details.
