import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Gym Tamagotchi</h1>
      <p className="text-xl mb-8">Transform your fitness journey with your very own workout companion!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Track Your Progress</h2>
          <p className="mb-4">Log your workouts, track your goals, and watch your Tamagotchi grow!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Stay Motivated</h2>
          <p className="mb-4">Your Tamagotchi evolves as you complete your fitness goals!</p>
        </div>
      </div>

      <div className="space-x-4">
        <Link 
          to="/register" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
        >
          Get Started
        </Link>
        <Link 
          to="/login" 
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home; 