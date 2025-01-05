# My Fullstack App - Backend

## Overview
This is the backend part of the My Fullstack App project. It is built using Node.js, Express, and MongoDB. The backend handles user authentication, video management, and channel management.

## Technologies Used
- Node.js
- Express
- MongoDB (via Mongoose)
- JSON Web Tokens (JWT)
- Bcrypt for password hashing
- CORS for cross-origin requests
- dotenv for environment variable management

## Folder Structure
```
backend/
├── models/          # Mongoose models for the application
├── routes/          # API routes for authentication, videos, and channels
├── config/          # Configuration files (e.g., database connection)
├── middleware/      # Middleware functions (e.g., authentication)
├── server.js        # Entry point for the backend application
├── .env             # Environment variables
└── package.json     # NPM dependencies and scripts
```

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB instance running

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-fullstack-app/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following variables:
   ```
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

### Running the Application
To start the server, use:
```
npm run dev
```
This will run the server with Nodemon for automatic restarts on file changes.

### API Endpoints
- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Log in an existing user

- **Videos**
  - `GET /api/videos` - Retrieve all videos
  - `GET /api/videos/:id` - Retrieve a specific video by ID
  - `POST /api/videos` - Upload a new video

- **Channels**
  - `GET /api/channels/:id` - Retrieve a specific channel by ID
  - `POST /api/channels` - Create a new channel
  - `PUT /api/channels/:id` - Update channel details

### Testing
Make sure to test all routes and functionalities thoroughly.

### Deployment
For deployment, consider using Heroku or any other cloud service that supports Node.js applications.

## License
This project is licensed under the MIT License.