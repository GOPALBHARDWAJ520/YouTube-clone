# My Fullstack App - Frontend

This project is the frontend part of a fullstack application built with React. It includes various components and pages that allow users to interact with the application, including video playback, user authentication, and channel management.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Pages](#pages)
- [Technologies](#technologies)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```
   cd my-fullstack-app/frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Usage

Once the development server is running, you can access the application at `http://localhost:3000`. You can navigate through the application using the header and sidebar components.

## Components

- **Header**: Contains a search bar and menu toggle.
- **Sidebar**: Implements navigation links for different categories.
- **VideoGrid**: Displays a grid layout of video thumbnails with titles, channel names, views, and upload times.
- **VideoPlayer**: Handles video playback and displays the title, description, and comments section.
- **ChannelPage**: Allows users to create and manage channels and upload videos.
- **Auth**: Reusable form components for user login and registration.

## Pages

- **HomePage**: The main landing page of the application.
- **VideoPage**: Displays a specific video based on its ID.
- **LoginPage**: User login interface.
- **RegisterPage**: User registration interface.

## Technologies

- React
- React Router
- Axios
- Tailwind CSS

For more information on the backend, please refer to the backend README.md file.