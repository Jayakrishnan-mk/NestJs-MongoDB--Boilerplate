# Quick Setup Guide

## 🚀 Getting Started

### 1. Environment Setup
```bash
# Copy environment files
cp env.dev .env.dev
cp env.prod .env.prod

# Edit the files with your configuration
```

### 2. Start Services (Choose one option)

#### Option A: Docker (Recommended)
```bash
# Start all services (MongoDB, Redis, App)
docker-compose up -d

# View logs
docker-compose logs -f app
```

#### Option B: Local Services
```bash
# Start MongoDB
docker run -d --name mongodb -p 27017:27017 mongo:6.0

# Start Redis
docker run -d --name redis -p 6379:6379 redis:7-alpine

# Start the app
npm run start:dev
```

### 3. Seed Database
```bash
npm run seed
```

This creates default users:
- **Admin**: admin@project-name.com / admin123
- **User**: user@project-name.com / user123

### 4. Test the API

#### Health Check
```bash
curl http://localhost:3000/api/health
```

#### Register User
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "firstName": "Test",
    "lastName": "User"
  }'
```

#### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@project-name.com",
    "password": "admin123"
  }'
```

## 📁 Project Structure

```
project-name/
├── src/
│   ├── auth/           # JWT Authentication
│   ├── users/          # User management
│   ├── upload/         # File upload
│   ├── cache/          # Redis caching
│   ├── config/         # Configuration
│   ├── database/       # Database setup & seeds
│   └── main.ts         # Application entry
├── uploads/            # File upload directory
├── docker-compose.yml  # Docker services
├── Dockerfile          # App container
└── README.md           # Full documentation
```

## 🔧 Available Commands

- `npm run start:dev` - Development server
- `npm run start:prod` - Production server
- `npm run build` - Build application
- `npm run seed` - Seed database
- `npm run test` - Run tests
- `docker-compose up -d` - Start all services
- `docker-compose down` - Stop all services

## 🌐 API Endpoints

- `GET /api/health` - Health check
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/users/profile` - Get user profile (protected)
- `POST /api/upload/image` - Upload image (protected)

## 🔐 Authentication

All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## 🐳 Docker Services

- **App**: NestJS application (port 3000)
- **MongoDB**: Database (port 27017)
- **Redis**: Cache (port 6379)

## 📝 Environment Variables

Key variables to configure:
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `REDIS_HOST` - Redis host
- `REDIS_PORT` - Redis port

## 🆘 Troubleshooting

1. **Port conflicts**: Change ports in docker-compose.yml
2. **Database connection**: Check MongoDB is running
3. **Redis connection**: Check Redis is running
4. **File uploads**: Ensure uploads/ directory exists

## 📚 Next Steps

1. Customize the User schema
2. Add more API endpoints
3. Implement email verification
4. Add role-based access control
5. Set up CI/CD pipeline
6. Add monitoring and logging

---

**Happy coding! 🎉** 