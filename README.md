# project-name - NestJS Boilerplate

A comprehensive NestJS boilerplate with MongoDB, JWT authentication, file upload, Redis caching, and rate limiting.

## 🚀 Features

- **NestJS** - Progressive Node.js framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT Authentication** - Secure token-based authentication
- **File Upload** - Image upload with validation
- **Redis Caching** - High-performance caching
- **Rate Limiting** - API rate limiting protection
- **Docker** - Containerized development and deployment
- **Environment Configuration** - Separate dev/prod configs
- **Validation** - Request validation with class-validator
- **CORS** - Cross-origin resource sharing enabled

## 📋 Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose (for containerized setup)
- MongoDB (if running locally)
- Redis (if running locally)

## 🛠️ Installation

### Option 1: Local Development

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd project-name
   npm install
   ```

2. **Set up environment:**
   ```bash
   # Copy environment files
   cp env.dev .env.dev
   cp env.prod .env.prod
   
   # Edit the environment files with your configuration
   ```

3. **Start MongoDB and Redis:**
   ```bash
   # Using Docker (recommended)
   docker run -d --name mongodb -p 27017:27017 mongo:6.0
   docker run -d --name redis -p 6379:6379 redis:7-alpine
   
   # Or install locally
   ```

4. **Run the application:**
   ```bash
   # Development
   npm run start:dev
   
   # Production
   npm run build
   npm run start:prod
   ```

### Option 2: Docker Setup (Recommended)

1. **Start all services:**
   ```bash
   docker-compose up -d
   ```

2. **View logs:**
   ```bash
   docker-compose logs -f app
   ```

3. **Stop services:**
   ```bash
   docker-compose down
   ```

## 🔧 Configuration

### Environment Variables

Create `.env.dev` and `.env.prod` files:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/project-name-dev

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# Rate Limiting
THROTTLE_TTL=60
THROTTLE_LIMIT=100

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_DEST=./uploads

# Server Configuration
PORT=3000
NODE_ENV=development
```

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### User Endpoints (Protected)

#### Get User Profile
```http
GET /api/users/profile
Authorization: Bearer <jwt-token>
```

#### Get All Users
```http
GET /api/users
Authorization: Bearer <jwt-token>
```

#### Get User by ID
```http
GET /api/users/:id
Authorization: Bearer <jwt-token>
```

#### Update User
```http
PATCH /api/users/:id
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "firstName": "Updated Name"
}
```

#### Delete User
```http
DELETE /api/users/:id
Authorization: Bearer <jwt-token>
```

### File Upload Endpoints (Protected)

#### Upload Image
```http
POST /api/upload/image
Authorization: Bearer <jwt-token>
Content-Type: multipart/form-data

file: <image-file>
```

### Health Check

#### Health Status
```http
GET /api/health
```

## 🏗️ Project Structure

```
src/
├── auth/                 # Authentication module
│   ├── guards/          # JWT guards
│   ├── strategies/      # Passport strategies
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── auth.module.ts
├── users/               # Users module
│   ├── dto/            # Data transfer objects
│   ├── schemas/        # Mongoose schemas
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── upload/              # File upload module
│   ├── upload.controller.ts
│   └── upload.module.ts
├── cache/               # Redis cache module
│   └── cache.module.ts
├── config/              # Configuration
│   └── configuration.ts
├── database/            # Database configuration
│   └── database.module.ts
├── app.controller.ts
├── app.service.ts
├── app.module.ts
└── main.ts
```

## 🧪 Testing

```bash
# Unit tests
npm run test

# e2e tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 📦 Available Scripts

- `npm run start:dev` - Start development server
- `npm run start:prod` - Start production server
- `npm run build` - Build the application
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run e2e tests
- `npm run test:cov` - Run test coverage

## 🔒 Security Features

- JWT token authentication
- Password hashing with bcrypt
- Rate limiting protection
- Input validation and sanitization
- CORS configuration
- Environment variable protection

## 🚀 Deployment

### Docker Deployment

1. **Build and run:**
   ```bash
   docker-compose -f docker-compose.yml up -d
   ```

2. **Production deployment:**
   ```bash
   # Set NODE_ENV=production in environment
   docker-compose -f docker-compose.prod.yml up -d
   ```

### Manual Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Set production environment:**
   ```bash
   export NODE_ENV=production
   ```

3. **Start the application:**
   ```bash
   npm run start:prod
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

---

**Happy Coding! 🎉**
