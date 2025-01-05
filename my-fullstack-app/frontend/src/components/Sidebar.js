import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full p-4">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul>
        <li className="mb-2">
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li className="mb-2">
          <Link to="/videos" className="hover:text-gray-400">Videos</Link>
        </li>
        <li className="mb-2">
          <Link to="/channels" className="hover:text-gray-400">Channels</Link>
        </li>
        <li className="mb-2">
          <Link to="/login" className="hover:text-gray-400">Login</Link>
        </li>
        <li className="mb-2">
          <Link to="/register" className="hover:text-gray-400">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;