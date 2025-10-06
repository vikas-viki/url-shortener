# URL Shortener API Documentation

## 1. Authentication

### POST /auth/google
Starts Google OAuth flow (returns Google OAuth URL or redirects).

### POST /auth/callback
Input:
```json
{ "code": "<google_oauth_code>" }
```
Output:
```json
{
  "token": "<jwt_token>",
  "expires_at": "2025-10-06T12:00:00Z"
}
```

---

## 2. URL Management

### POST /urls
Create a new short URL.

Request:
```json
{
  "target_url": "https://example.com/some/long/path",
  "custom_alias": "my-link",
  "topic": "marketing"
}
```

Response:
```json
{
  "id": "uuid",
  "alias": "my-link",
  "short_url": "https://sho.rt/my-link",
  "target_url": "https://example.com/some/long/path",
  "topic": "marketing",
  "created_at": "2025-10-06T12:30:00Z"
}
```

### GET /urls
List all URLs created by the user.

Response:
```json
{
  "urls": [
    {
      "id": "uuid",
      "alias": "my-link",
      "target_url": "https://example.com",
      "topic": "marketing",
      "clicks": 120,
      "unique_visitors": 85
    }
  ]
}
```

### GET /urls/:id
Get details of a single URL.

Response:
```json
{
  "id": "uuid",
  "alias": "my-link",
  "target_url": "https://example.com",
  "topic": "marketing",
  "created_at": "2025-10-06T12:00:00Z",
  "clicks": 120,
  "unique_visitors": 85
}
```

---

## 3. Redirect

### GET /:alias
Redirects to original URL. Logs `{ ip, user_agent, device, os, location, timestamp }`.

Response: 302 Redirect.

---

## 4. Analytics

### GET /analytics?[url_id|topic]
Returns analytics filtered by URL or topic.

Response:
```json
{
  "total_visits": 200,
  "unique_visitors": 150,
  "urls": [
    {
      "id": "uuid",
      "alias": "my-link",
      "clicks": 120,
      "unique_visitors": 85
    }
  ],
  "geo_distribution": [
    { "country": "India", "count": 90, "percentage": 45 },
    { "country": "US", "count": 50, "percentage": 25 }
  ],
  "device_breakdown": [
    { "device": "mobile", "count": 130 },
    { "device": "desktop", "count": 70 }
  ]
}
```

---

## 5. System Overview

### GET /overview
System-wide stats.

Response:
```json
{
  "user_count": 1200,
  "url_count": 4500,
  "total_visits": 120000,
  "countries_served": [
    { "country": "India", "count": 40000 },
    { "country": "US", "count": 25000 }
  ]
}
```
