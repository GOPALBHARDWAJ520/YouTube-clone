import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold">MyApp</Link>
        <form onSubmit={handleSearch} className="ml-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 rounded"
          />
          <button type="submit" className="ml-2 p-2 bg-blue-500 rounded">Search</button>
        </form>
      </div>
      <div>
        <button className="p-2 bg-blue-500 rounded">Menu</button>
      </div>
    </header>
  );
};

export default Header;