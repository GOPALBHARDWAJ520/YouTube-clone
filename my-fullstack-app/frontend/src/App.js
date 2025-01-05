import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideoPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChannelPage from './components/ChannelPage';
import VideoPlayer from './components/VideoPlayer';
import Auth from './components/Auth';

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/channel/:id" element={<ChannelPage />} />
      </Routes>
    </Router>
  );
}

export default App;