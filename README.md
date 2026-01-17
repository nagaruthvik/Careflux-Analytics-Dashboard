# Careflux Fullstack Intern Assignment

## Sakila Analytics Dashboard

A full-stack business analytics dashboard built on the Sakila DVD Rental Database, providing real-time insights using GraphQL APIs and an interactive React-based dashboard.

---

## Project Overview

This project visualizes key business metrics from a DVD rental store database.
It demonstrates:

* GraphQL API development
* SQL-based analytics on relational data
* React dashboard with charts and tables
* Global filtering (Store and Date Range)
* Full-stack integration between frontend and backend

---

## Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Apollo Client (GraphQL)
* Recharts (Charts)

### Backend

* Node.js with Express
* GraphQL (graphql-http)
* MySQL (Sakila Database)
* Sequelize (Database connection)
* Raw SQL for analytics queries

---

## Project Structure

```
Careflux-Analytics-Dashboard/
│
├── backend/
│   ├── src/
│   │   ├── config/          # Database connection
│   │   ├── graphql/         # GraphQL schema and resolvers
│   │   ├── models/          # Sequelize models
│   │   ├── services/        # SQL analytics queries
│   │   └── server.js        # Express + GraphQL server
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/      # Dashboard UI components
│   │   ├── pages/           # Dashboard layout
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── screenshots/
│   └── dashboard.png
│
└── README.md
```

---

## Features Implemented

### Backend GraphQL Queries

| Query Name            | Description                                      |
| --------------------- | ------------------------------------------------ |
| getTopRentedFilms     | Returns top 5 rented films based on rental count |
| getRevenueByCategory  | Returns revenue distribution by film category    |
| getTopCustomers       | Returns top 10 customers by total spending       |
| getKeyMetrics         | Returns total revenue and active rentals         |
| getRecentTransactions | Returns recent rental payment transactions       |

All queries support:

* Store filter (Store 1, Store 2, or All)
* Date range filter

---

### Frontend Dashboard Components

* Global Filter Bar (Store and Date Range)
* KPI Cards (Total Revenue and Active Rentals)
* Top 5 Rented Films (Bar Chart)
* Revenue Distribution (Pie Chart)
* Top Customers (Table)
* Recent Transactions (Feed)

All components automatically update when filter values change.

---

## Database Setup

1. Download the Sakila MySQL Database
   [https://dev.mysql.com/doc/index-other.html](https://dev.mysql.com/doc/index-other.html)

2. Create database:

```
CREATE DATABASE sakila;
```

3. Import schema and data:

```
mysql -u root -p sakila < sakila-schema.sql
mysql -u root -p sakila < sakila-data.sql
```

---

## Backend Setup

Navigate to backend folder:

```
cd backend
npm install
```

Create a `.env` file using this template:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=sakila
PORT=4000
```

Start the backend server:

```
npm run dev
```

GraphQL endpoint:

```
http://localhost:4000/graphql
```

---

## Frontend Setup

Navigate to frontend folder:

```
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## Default Filter Range

The Sakila dataset contains records from 2005–2006.
The default date range is configured as:

```
2005-01-01 → 2006-12-31
```

---

## Dashboard Screenshot

<img width="1897" height="859" alt="image" src="https://github.com/user-attachments/assets/4e3baaa2-bc83-47d8-a734-3a4e88706f7d" />
<img width="1894" height="858" alt="image" src="https://github.com/user-attachments/assets/3e833850-aed9-434f-bf6d-2bd6c1ba2845" />
<img width="1889" height="861" alt="image" src="https://github.com/user-attachments/assets/27c5ae82-f8a5-41dd-9867-355c98e5b39a" />




---

## How the System Works

1. User selects Store and Date Range from the global filter bar
2. React updates GraphQL query variables
3. Apollo Client refetches data automatically
4. GraphQL backend executes SQL analytics queries
5. Dashboard updates charts and tables in real time

---

## Author

R Naga Ruthvik
B.Tech CSE Graduate
Full-stack and Data Analytics Enthusiast

---

                                    
