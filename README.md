# Vehicle Rent Application

A full-stack vehicle rental system built with **React**, **Node.js/Express**, and **PostgreSQL**. Users can view vehicles, book them, cancel bookings, and return vehicles. Admin can manage vehicles and view all bookings.

---

## Table of Contents

- [Technologies](#technologies)
- [Setup](#setup)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Database](#database)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Usage](#usage)

---

## Technologies

- Frontend: React, React Router, TailwindCSS, DaisyUI, SweetAlert2  
- Backend: Node.js, Express, TypeScript, PostgreSQL  
- Authentication: JWT, bcrypt  
- Database: PostgreSQL  

---

## Setup

### Backend

1. Go to backend folder:

```bash
cd backend

Install dependencies:

npm install


Start server:

npm run dev


Server runs on http://localhost:5000.

Frontend

Go to frontend folder:

cd frontend


Install dependencies:

npm install


Start development server:

npm run dev


Frontend runs on http://localhost:5173.

Database

Create PostgreSQL database:

CREATE DATABASE vehicle_rent;


Run migrations / create tables:

-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  phone VARCHAR(15),
  role VARCHAR(10) DEFAULT 'customer'
);

-- Vehicles table
CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY,
  vehicle_name VARCHAR(100),
  type VARCHAR(50),
  registration_number VARCHAR(50),
  daily_rent_price NUMERIC,
  availability_status VARCHAR(20) DEFAULT 'available'
);

-- Bookings table
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES users(id),
  vehicle_id INT REFERENCES vehicles(id),
  rent_start_date DATE NOT NULL,
  rent_end_date DATE NOT NULL,
  total_price NUMERIC,
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);

Environment Variables

Create a .env file in backend:

PORT=5000
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=vehicle_rent
JWT_SECRET=your_jwt_secret
BCRYPT_SALT_ROUNDS=10

API Endpoints
Auth

POST /auth/signup – Signup user

POST /auth/signin – Login user

Vehicles

GET /vehicles – Get all vehicles

GET /vehicles/:id – Get vehicle by ID

POST /vehicles – Create vehicle (admin)

PATCH /vehicles/:id – Update vehicle (admin)

DELETE /vehicles/:id – Delete vehicle (admin)

Bookings

POST /bookings – Create booking

GET /bookings/:userId – Get user bookings

POST /bookings/:bookingId/cancel – Cancel booking

POST /bookings/:bookingId/return – Return booking

Features

User signup/login with JWT authentication

View all vehicles

Book a vehicle with start/end dates

Cancel booking before start date

Return vehicle after rental

Dashboard to see all bookings

Admin: manage vehicles and view all bookings

Usage

Signup as a new user

Login and view vehicles

Book a vehicle by selecting dates

View booked vehicles in dashboard

Cancel or return booking from dashboard

