import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Borrow from "./pages/Borrow";
import Return from "./pages/Return";
import "./App.css"; // Import your CSS file for additional styling
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

function App() {
  // State to track if the logout dropdown is open
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    // Implement logout logic here
    console.log("User logged out");
  };

  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="bg-gray-800 p-4 text-lg relative">
          <ul className="flex justify-around gap-4 relative z-10">
            {/* Image Item */}
            <li>
              <img
                src="https://img.freepik.com/free-vector/library-interior-empty-room-reading-with-books-wooden-shelves_33099-1722.jpg"
                alt="Library"
                className="h-10 w-10 rounded-full"
              />
            </li>
            {/* Home Link */}
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            {/* Books Link */}
            <li>
              <Link
                to="/books"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Books
              </Link>
            </li>
            {/* Borrow Link */}
            <li>
              <Link
                to="/borrow"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Borrow
              </Link>
            </li>
            {/* Return Link */}
            <li>
              <Link
                to="/return"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Return
              </Link>
            </li>
            {/* Logout Dropdown */}
            <li>
              <button className="text-white">Logout</button>
              {isLogoutOpen && (
                <ul className="absolute bg-gray-800 p-2 rounded mt-2">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <div>
          <Routes>
            {/* Route for Home */}
            <Route exact path="/" element={<Home />} />
            {/* Route for Books */}
            <Route path="/books" element={<Books />} />
            {/* Route for Borrow */}
            <Route path="/borrow" element={<Borrow />} />
            {/* Route for Return */}
            <Route path="/return" element={<Return />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
