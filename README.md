# Insurance Policy Platform

## Overview
This is a full-stack web application for browsing and filtering insurance policies. The application provides a comprehensive interface to search, filter, and sort insurance policies based on various criteria.

## Features
- **Search policies by name**
- **Filter policies by:**
  - Policy type
  - Premium range
  - Minimum coverage amount
- **Sort policies by premium**
- **Responsive and clean user interface**

## Tech Stack
- **Backend:** Node.js with Express
- **Frontend:** React
- **Styling:** Tailwind CSS
- **State Management:** React Hooks

## Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

## Setup and Installation

### Backend Setup
1. the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend dev server:
   ```bash
   npm run dev
   ```
4. build the backend server:
   ```bash
   npm run build
   ```
5. start after build the backend server:
   ```bash
   npm start
   ```
6. The server will run on [http://localhost:5000](http://localhost:5000)

### Frontend Setup
1. the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
4. The frontend will run on [http://localhost:5173](http://localhost:5173)

## Project Structure

### Backend (`backend/`)
- **`routes/policy.route.ts`**: Policy filtering and search routes
- **`server.js`**: Main server configuration

### Frontend (`frontend/`)
- **`src/components/`**: Reusable React components
- **`src/App.tsx`**: Main application component

