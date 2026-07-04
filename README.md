# My Portfolio

## Live Website

Frontend: https://my-portfolio-gamma-nine-63.vercel.app

Backend API: https://user-authentication-api-production.up.railway.app

---

# API Documentation

## Base URL

https://user-authentication-api-production.up.railway.app

### Register User

**POST** /register

Request Body:

```json
{
  "name": "Pallavi",
  "email": "pallavi@example.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "User registered successfully"
}
```

### Login User

**POST** /login

Request Body:

```json
{
  "email": "pallavi@example.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "Login successful"
}
```

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB Atlas
- Railway
- Vercel
