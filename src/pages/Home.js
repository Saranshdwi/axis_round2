import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-screen flex items-center justify-center">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-semibold text-white mb-5">
          Welcome to Library Management System
        </h1>
        <p className="text-lg text-white">
          Manage your library's collection efficiently and facilitate user
          interaction with our intuitive system.
        </p>
        <div className="mt-8">
          <p className="text-lg text-white">Explore our features:</p>
          <ul className="list-disc list-inside text-white mt-2">
            <li>Search and browse through a vast collection of books.</li>
            <li>Borrow books and keep track of borrowed items.</li>
            <li>Return books with ease.</li>
            <li>Manage user accounts and permissions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
