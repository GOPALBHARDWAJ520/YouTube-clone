import React, { useState } from 'react';
import axios from 'axios';
import Auth from '../components/Auth';

const LoginPage = () => {
  const [error, setError] = useState('');

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      // Handle successful login (e.g., store token, redirect)
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <Auth onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;