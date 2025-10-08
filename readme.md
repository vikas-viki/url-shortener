# 🌐 URL Shortener API

A scalable and production-grade **URL Shortener** that supports authentication, analytics, and high availability.

---

## 📘 Documentation & Deployment

- **API Documentation:** [Postman Collection](https://documenter.getpostman.com/view/43899618/2sB3QJNqYz)  
- **Base URL:** `https://shorturl.0xbuilder.in`  
- **Health Check:** [https://shorturl.0xbuilder.in/api/health](https://shorturl.0xbuilder.in/api/health)

---

## 🛠️ Setup Instructions

### Clone & Install
```bash
git clone git@github.com:vikas-viki/url-shortener.git
cd url-shortener
npm install

# Add required environment variables as per `.env.example`
```

### Run Locally

**Standard (Node.js):**
```bash
# Start the main server
npm run dev

# Start the SQS worker
npm run start:worker
```

**Using Docker Compose:**
```bash
docker compose up --build
```

Once running, visit [http://localhost:5000/api/health](http://localhost:5000/api/health) to verify the server status.

---

## 🧩 Project Overview

This service enables authenticated users to **shorten URLs**, manage them by **topics**, and access **analytics** at multiple levels.

### Core Capabilities
- Secure Google OAuth2-based authentication  
- Short URL creation with optional aliases and topics  
- Real-time analytics (unique users, device/OS stats, geolocation trends)  
- High-performance caching with Redis  
- Rate limiting for abuse prevention  

### Deployment Stack
- **Hosting:** AWS EC2 (Dockerized setup)  
- **CI/CD:** GitHub Actions → AWS ECR → EC2  
- **Routing:** Nginx (reverse proxy)  
- **Domain:** Managed via GoDaddy  
- **Secrets:** GPG-encrypted `.env` files with Git hooks

---

## ✨ Key Features

- Google OAuth2 authentication  
- Alias & topic-based URL creation (limit: 60 per 5 hours)  
- Real-time analytics dashboard (per URL and per topic)  
- Secure rate limiting and input validation  
- Redis caching for hot links

---

## 🧠 Technical Challenges & Solutions

**Challenge:** Efficiently processing millions of URL visits without overloading the database.  
**Solution:** Introduced **AWS SQS** for decoupled event processing. Each redirect pushes analytics data to an SQS queue, processed in batches by a dedicated worker, drastically improving throughput and reliability.

---

## 🚀 Future Improvements

- Dedicated redirection microservice for independent scaling  
- Advanced URL controls (deletion, expiration, custom domains)  
- Horizontal scaling via load balancer  
- Role-based access control & analytics dashboard UI

---

## 🏗️ Architecture Overview

- **Authentication:** Google OAuth using `google-auth-library` & `googleapis`  
- **Protected Routes:** `/urls/...`, `/analytics/...` secured via JWT in `Authorization` header  
- **Event Queue:** SQS integration for asynchronous analytics processing  
- **Worker:** `src/utils/pollSQS.ts` consumes analytics events and writes to DB  

![System Architecture](architecture.png)

---

## ⚙️ Tech Stack

| Component | Technology |
|------------|-------------|
| Backend | Node.js (Express) |
| Database | PostgreSQL (via Prisma ORM) |
| Cache | Redis |
| Queue | AWS SQS |
| Auth | Google OAuth 2.0 |
| CI/CD | GitHub Actions + Docker + AWS ECR |
| Validation | Zod |
| Rate Limiting | rate-limiter-flexible |
| Security | Helmet |
| Utilities | Nanoid, UA-Parser-JS |

---

## 📦 API Overview

The API provides endpoints for:  
- User authentication (Google OAuth2)  
- URL shortening and management  
- Analytics aggregation (per URL, topic, and overall system-level)  

**Base URL:** `https://shorturl.0xbuilder.in`  

For detailed endpoints, parameters, and schemas, refer to the [Postman Documentation](https://documenter.getpostman.com/view/43899618/2sB3QJNqYz).
