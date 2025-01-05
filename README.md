# YouTube Clone - MERN Stack Project

## Overview

The YouTube Clone is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). It replicates core YouTube features like video playback, user authentication, and channel management, with a responsive design suitable for various devices.

---

## Features

### Front-End (React)
- **Home Page**: Displays a grid of video thumbnails with details like title, channel name, and views.
- **User Authentication**: Registration and login using JWT.
- **Search Functionality**: Filter videos by title via a search bar.
- **Video Player Page**: Watch videos with title, description, and comments.
- **Channel Management**: Create, manage, and display videos on user channels.

### Back-End (Node.js, Express)
- **User Authentication**: Secure JWT-based login and registration.
- **Video Management**: Endpoints for uploading, retrieving, and managing videos.
- **Channel Management**: Create and update user channels.
- **Comment Handling**: Add and fetch comments for videos.

### Database (MongoDB)
- Users, Videos, Channels, and Comments schemas for structured data storage.

---

## Tech Stack

- **Front-End**: React, React Router, Tailwind CSS
- **Back-End**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)

---

## Installation

### Prerequisites
- Node.js (v14 or later)
- MongoDB (local or cloud-based)
- Git


## Installation

1. **Clone the repository and set up the application**:  
   ```bash
   git clone https://github.com/yourusername/youtube-clone.git
   cd youtube-clone
   # Set up the back end
   cd backend  
   npm install  
   touch .env  # Add MONGO_URI, JWT_SECRET, PORT in .env
   npm run dev &  
   # Set up the front end
   cd ../frontend  
   npm install  
   npm start
2. Access the application:
Frontend: http://localhost:3000
Backend: http://localhost:5000
API Endpoints:

Auth: /api/auth/register, /api/auth/login
Videos: /api/videos, /api/videos/:id
Channels: /api/channels, /api/channels/:id
Comments: /api/comments, /api/comments/:videoId
Future Enhancements: Video recommendations, subscription system, advanced analytics.

License: This project is licensed under the MIT License. Contributions are welcome!

This combines the setup into a single bash script for seamless execution. The `npm run dev &` command runs the backend server in the background while you set up the frontend.
