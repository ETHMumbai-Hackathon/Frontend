import React from 'react';
import aboutImage from "../assets/cricket.jpg";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row">
        {/* Left side */}
        <div className="lg:w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-col lg:flex-row">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 lg:mr-2">
              Button 1
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded lg:mb-2">
              Button 2
            </button>
          </div>
        </div>
        {/* Right side */}
        <div className="w-50 pl-5">
          <img
            src="/src/assets/cricket.jpg"
            alt="About Us"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
