# My Fullstack App

## Overview
This project is a fullstack application that consists of a frontend built with React and a backend built with Node.js and Express. The application allows users to upload and manage videos, create channels, and authenticate using JWT.

## Project Structure
```
my-fullstack-app
├── frontend
│   ├── src
│   ├── package.json
│   └── README.md
├── backend
│   ├── models
│   ├── routes
│   ├── config
│   ├── middleware
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md
```

## Frontend
The frontend is built using React and includes the following features:
- **Components**: Header, Sidebar, VideoGrid, VideoPlayer, ChannelPage, Auth.
- **Pages**: HomePage, VideoPage, LoginPage, RegisterPage.
- **Routing**: Implemented using `react-router-dom`.
- **Styling**: Utilizes Tailwind CSS for responsive design.

### Installation
1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.

### Running the Frontend
- Use `npm start` to run the frontend application.

## Backend
The backend is built using Node.js and Express and includes the following features:
- **Models**: User, Video, Channel, Comment.
- **Routes**: Authentication, Video management, Channel management.
- **Middleware**: JWT authentication middleware.
- **Database**: MongoDB connection using Mongoose.

### Installation
1. Navigate to the `backend` directory.
2. Run `npm install` to install dependencies.

### Running the Backend
- Use `nodemon server.js` to run the backend application.

## Environment Variables
Create a `.env` file in the `backend` directory with the following variables:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## Deployment
- The backend can be deployed on Heroku.
- The frontend can be deployed on Netlify.

## Testing
Ensure to test all routes and functionalities thoroughly before deployment.

## License
This project is licensed under the MIT License.