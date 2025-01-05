import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import VideoGrid from '../components/VideoGrid';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <VideoGrid />
      </div>
    </div>
  );
};

export default HomePage;