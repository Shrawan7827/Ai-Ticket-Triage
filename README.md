# 🎫 AI Ticket Triage System

## 📌 Overview

The AI Ticket Triage System is a full-stack application that automatically analyzes and categorizes user support tickets. It assigns priority, extracts keywords, and organizes tickets efficiently.

---

## 🚀 Features

* 🧠 Automatic ticket analysis
* 📂 Category classification
* ⚡ Priority detection
* 🔑 Keyword extraction
* 📊 Ticket listing dashboard
* 🐳 Dockerized full-stack setup

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** SQLite
* **Containerization:** Docker, Docker Compose

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd ai-ticket-triage
```

### 2. Run using Docker

```bash
docker-compose up --build
```

---

## 🌐 Access the App

* Frontend: http://localhost
* Backend API: http://localhost:5000

---

## 📡 API Endpoints

### POST /tickets/analyze

Analyze a new ticket

**Request:**

```json
{
  "message": "Server is down"
}
```

**Response:**

```json
{
  "message": "Server is down",
  "category": "Technical",
  "priority": "High",
  "confidence": 0.95,
  "keywords": ["server", "down"]
}
```

---

### GET /tickets

Fetch all tickets

---

## 🧪 Testing

* Enter a message in UI
* Click **Analyze**
* View results and stored tickets

---


## 👨‍💻 Author

Shrawan Kumar
